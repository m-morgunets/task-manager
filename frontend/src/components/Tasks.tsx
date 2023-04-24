import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { TaskItem } from "../types/tasks";
import CheckBox from "./CheckBox";
import { ReactComponent as Lightning } from "./../assets/lightning.svg";


// Типизация props-ов
type TasksProps = { tasks: TaskItem[] };

// Компонента используемая для вывода задач
const Tasks: FC<TasksProps> = ({ tasks }) => {
	// Получение экшенов из store-а
	const { toggleImportantTask, setNumberTasks } = useActions();

	// Измненение значения количества задач на текущей странице 
	// В качестве зависимости передано количество задач на текущей странцие 
	useEffect(() => {
		setNumberTasks(tasks?.length);
	}, [tasks?.length])
	

	return (
		<ul className="mt-5">
			{tasks?.map((item) => (
				<li 
					key={item.id}
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
					<label className="pl-3 w-full cursor-pointer" htmlFor={String(item.id)}>
						{item.text}
					</label>

					{/* Молния для добавления задачи в список "важные" */}
					<div
						onClick={() => toggleImportantTask(item.id)}
						className={`group/svg ml-8 min-w-[40px] w-[40px] h-[40px] cursor-pointer relative group-hover/item:visible 
							${item.isImportant ? "visible" : "invisible"}`}
					>
						<Lightning className={`w-[30px] h-[30px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] 
							group-hover/svg:fill-orange-600 ${item.isImportant && !item.isCompleted ? "fill-orange-600" : "fill-gray-400"}`}/>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Tasks;
