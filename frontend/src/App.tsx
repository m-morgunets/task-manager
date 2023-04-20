import { useEffect } from "react";
import Tasks from "./components/Tasks";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import InputAddTask from "./components/InputAddTask";

const App = () => {
	// Получение данных из store-а
	const {numberTasks, tasks} = useAppSelector((store) => store);

	// Получение экшенов из store-а
	const { getTasks } = useActions();

	useEffect(() => {
		// Функция получения текущего списка задач
		getTasks();
	}, []);

	return (
		<div className="py-14 px-5 font-sans max-w-[1200px] mx-auto">

			{/* Заголовок приложения */}
			<div className="inline-block">
				<h1 className="text-3xl font-medium">Менеджер Задач</h1>
				<h2 className="text-right text-gray-400 font-medium text-lg">
					by Mikhail
				</h2>
			</div>
			{/* Отображения кол-ва задач на текущей странице */}
			<div className="pb-5 text-right">Задач: {numberTasks}</div>

			{/* Основная часть сайта */}
			<div className="border-solid border-t">
				<div className="max-w-[800px] mx-auto pt-6 flex">

					{/* Навигация сайта */}
					<Navigation /> 

					<div className="ml-16 w-full">
						{/* Строка ввода новой задачи */}
						<InputAddTask />

						{/* Использование Routes для вывода разного списка задач в зависимости от выбранной страницы */}
						<Routes>
							<Route
								path="/"
								element={ <Tasks tasks={tasks.filter((item) => item.isCompleted === false)} /> }
							/>
							<Route
								path="/completed"
								element={ <Tasks tasks={tasks.filter((item) => item.isCompleted === true)} /> }
							/>
							<Route
								path="/important"
								element={ <Tasks tasks={tasks.filter((item) => item.isImportant === true && item.isCompleted !== true)} /> }
							/>
							{/* Если введена ссылка на несуществующую страницу, то произойдёт редирект на главную страницу */}
							<Route path="*" element={<Navigate to={"/"} />} />
						</Routes>
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default App;
