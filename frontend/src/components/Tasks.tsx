import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { TaskItem } from "../types/tasks";
import CheckBox from "./CheckBox";

// Типизация props-ов
type TasksProps = { tasks: TaskItem[] };

// Компонента используемая для вывода задач
const Tasks: FC<TasksProps> = ({ tasks }) => {
	// Получение экшенов из store-а
	const { toggleImportantTask, setNumberTasks } = useActions();

	// Измненение значения количества задач на текущей странице 
	// В качестве зависимости передано количество задач на текущей странцие 
	useEffect(() => {
		setNumberTasks(tasks.length);
	}, [tasks.length])
	

	return (
		<ul className="mt-5">
			{tasks.map((item) => (
				<li
					className={`group/item flex items-center 
					${item.isImportant && !item.isCompleted ? "text-orange-600 font-bold" : ""} 
					${item.isCompleted ? "line-through text-gray-400" : ""}`}
				>
					{/* Компонента вывода input[checkbox] */}
					<CheckBox
						isChecked={item.isCompleted}
						id={String(item.id)}
						key={item.id}
					/>

					{/* Вывод текста задачи */}
					<label
						className="pl-3 w-full cursor-pointer"
						htmlFor={String(item.id)}
					>
						{item.text}
					</label>

					{/* Молния для добавления задачи в список "важные" */}
					<div
						onClick={() => toggleImportantTask(item.id)}
						className={`group/svg ml-8 min-w-[40px] w-[40px] h-[40px] cursor-pointer relative group-hover/item:visible 
							${item.isImportant ? "visible" : "invisible"}`}
					>
						<svg
							className={`w-[30px] h-[30px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] 
							group-hover/svg:fill-orange-600 ${item.isImportant && !item.isCompleted ? "fill-orange-600" : "fill-gray-400"}`}
							version="1.1"
							id="_x32_"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								d="M369.533,177.027h-67.716L367.744,0h-218.25l-37.056,288.551h73.68l-32.431,208.975
	c-0.899,5.808,2.342,11.453,7.805,13.606c5.472,2.144,11.686,0.216,14.98-4.642l223.09-329.462H369.533z M198.384,417.302
	l24.92-160.612h-74.649l28.879-224.828h144.344l-65.926,177.027h83.56L198.384,417.302z"
							/>
						</svg>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Tasks;
