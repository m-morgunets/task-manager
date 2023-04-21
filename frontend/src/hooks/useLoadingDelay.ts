import { useEffect, useState } from "react";

// Хук создан для задерки вывода индирактора загрузки
// В функцию приходит последнее значение из state и если в течение 500мс не придёт новое значени,
// то вернётся текущее значение
export function useLoadingDelay(value: boolean, delay = 500): boolean {
	// Заносим полученное значение в локальный state
	const [isLoading, setIsLoading] = useState(value);

	useEffect(() => {
		// Создаём timeout с задержкой delay(мс)
		const handler = setTimeout(
			() => {
				// через delay(мс) изменится значение isLoading в локальном стейте
				// и функция useLoadingDelay вернёт новое значение
				setIsLoading(value);
			},
			// Если придёт false, то функция отработает без задержки (т.е. loader пропадёт без задержки)
			value ? delay : 0
		);

		// При повторном вызове нового useEffect в прошлом useEffect-е отрабатывает функция в return ,
		// т.е. очищается прошлый timeout
		return () => clearTimeout(handler);
	}, [value, delay]);

	return isLoading;
}
