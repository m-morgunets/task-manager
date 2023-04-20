import { FC } from "react";
import { NavLink } from "react-router-dom";

// Компонента используемая для вывода навигации
const Navigation: FC = () => {
	// Массив пунктов навигации
	const arrayLinks = [
		{ title: "Мои задачи", link: "/" },
		{ title: "Выполненные", link: "/completed" },
		{ title: "Важные", link: "/important" },
	];

	return (
		<ul>
			{/* Перебор массива элементов навигации */}
			{arrayLinks.map((item) => (
				<li className="text-xl mb-4">
					{/* NavLink используется для навигации по SPA приложению (является частью react-router-dom) */}
					<NavLink
						// isActive имеет значение true, если открыта страница на которую введёт текущая ссылка
						className={({ isActive }) => isActive ? "text-orange-600" : "hover:text-orange-600"}
						to={item.link}
					>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
