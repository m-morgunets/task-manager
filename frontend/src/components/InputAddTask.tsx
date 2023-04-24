import { FC, useState, KeyboardEvent, ChangeEvent } from "react";
import { useActions } from "../hooks/useActions";

// Компонента используемая для вывода интерфейса добавления новой задачи
const InputAddTask: FC = () => {
	// Получение экшенов из store-а
	const { addTask } = useActions();
	// Создание локального state-а для строки ввода
	const [inputTask, setInputTask] = useState<string>("");

	// Функция добавления новой задачи (использует экшен и очищает локальное состояние)
	const addTaskFunc = () => {
		addTask(inputTask);
		setInputTask("");
	};
	// Функция получает значение из input и вызывает функцию изменения state
	const setInputTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTask(e.target.value);
	}
	// Функция добавления новой задачи используя кнопку Enter
	const addTaskKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") addTaskFunc();
	};

	return (
		<div className="flex items-center">
			{/* Строка ввода новой задачи */}
			<input
				value={inputTask}
				onChange={setInputTaskChange}
				onKeyDown={addTaskKeyDown}
				placeholder="введите текст новой задачи"
				type="text"
				className="w-full border-solid border-b placeholder:italic py-1 px-3"
			/>
			{/* Кнопка для добавления новой задачи */}
			<button
				onClick={addTaskFunc}
				className="ml-10 min-w-[40px] w-[40px] h-[40px] bg-orange-600 rounded-lg font-medium text-white text-2xl"
			>+</button>
		</div>
	);
};

export default InputAddTask;
