import React, { FC } from "react";
import { useActions } from "../hooks/useActions";

// Типизация props-ов
type CheckBoxProps = { id: string; isChecked: boolean };

// Компонента CheckBox используемая в элементах списка задач
const CheckBox: FC<CheckBoxProps> = ({ id, isChecked }) => {
	// Получение экшенов из store-а
	const { toggleCompletedTask } = useActions();

	return (
		<div className="relative flex cursor-pointer items-center rounded-full p-3">
			{/* Встроенный checkbox */}
			<input
				onChange={(e) => toggleCompletedTask(e.target.id)}
				checked={isChecked}
				type="checkbox"
				className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none border border-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:bg-opacity-0 checked:before:bg-gray-400 hover:before:opacity-10"
				id={id}
			/>
			{/* Элемент для создания своей галочки поверх checkbox */}
			<div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gray-400 opacity-0 transition-opacity peer-checked:opacity-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="0.5"
				>
					<path
						fillRule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clipRule="evenodd"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default CheckBox;
