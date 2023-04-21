import { FC } from "react";

// Компонент для вывода анимации загрузки
const Loader: FC = () => {
	return (
		<div className="w-12 h-12 rounded-[50%] border-[6px] border-white border-t-orange-600 border-b-orange-600 animate-spin"></div>
	);
};

export default Loader;
