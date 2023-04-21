import { TasksAction, TasksActionTypes, TasksState } from "../../types/tasks";

// Создание инициализационного стейта
const initialState: TasksState = {
	tasks: [],
	isLoading: false,
	error: null,
	numberTasks: 0,
};

export const tasksReducer = (
	state = initialState,
	action: TasksAction
): TasksState => {
	switch (action.type) {
		// Используется перед началом запроса (включает загрузку)
		case TasksActionTypes.FETCH_TASKS:
			return { ...state, isLoading: true };

		// Используется при успешном запросе (выключает загрузку и заносит данные в state)
		case TasksActionTypes.FETCH_TASKS_SUCCESS:
			return { ...state, isLoading: false, tasks: action.payload };

		// Используется при получении ошибки в запросе (выключает загрузку и заносит данные об ошибке в state)
		case TasksActionTypes.FETCH_TASKS_ERROR:
			return { ...state, isLoading: false, error: action.payload };

		// Используется для записи текущего количества страниц
		case TasksActionTypes.SET_NUMBER_TASKS:
			return { ...state, numberTasks: action.payload };

		default:
			return state;
	}
};
