import { TaskItem, TasksAction, TasksActionTypes } from "./../../types/tasks";
import { Dispatch } from "redux";
import axios, {AxiosError} from "axios";

// Задание базового url при запрсое 
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

// Функция получения списка задач
export const getTasks = () => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch({ type: TasksActionTypes.FETCH_TASKS });

		// Запрос за списком задач
		await instance.get<TaskItem[]>('tasks').then(
			// В случае успешного запроса данные заносятся в state
			response => dispatch({ type: TasksActionTypes.FETCH_TASKS_SUCCESS, payload: response.data })
		).catch((err: Error | AxiosError) => {
			// В случае ошибки во время запроса данные об ошибке заносятся в state
			console.log(err);
			dispatch({ type: TasksActionTypes.FETCH_TASKS_ERROR, payload: err.message })
		});
	};
};

// Функция добавления новой задачи
export const addTask = (taskText: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch({ type: TasksActionTypes.FETCH_TASKS });

		// Запрос на добавление задачи
		await instance.post<TaskItem[]>(`addtask/${taskText}`).then(
			// В случае успешного запроса данные заносятся в state
			response => dispatch({ type: TasksActionTypes.FETCH_TASKS_SUCCESS, payload: response.data })
		).catch((err: Error | AxiosError) => {
			// В случае ошибки во время запроса данные об ошибке заносятся в state
			console.log(err);
			dispatch({ type: TasksActionTypes.FETCH_TASKS_ERROR, payload: err.message })
		});
	};
};

// Фукнция изменения статуса выполнения задачи
export const toggleCompletedTask = (id: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch({ type: TasksActionTypes.FETCH_TASKS });

		// Запрос на изменение статуса выполнения задачи
		await instance.put<TaskItem[]>(`completed/${id}`).then(
			// В случае успешного запроса данные заносятся в state
			response => dispatch({ type: TasksActionTypes.FETCH_TASKS_SUCCESS, payload: response.data })
		).catch((err: Error | AxiosError) => {
			// В случае ошибки во время запроса данные об ошибке заносятся в state
			console.log(err);
			dispatch({ type: TasksActionTypes.FETCH_TASKS_ERROR, payload: err.message })
		});
	};
};

// Фукнция изменения статуса важности задачи
export const toggleImportantTask = (id: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch({ type: TasksActionTypes.FETCH_TASKS });

		// Запрос на изменение статуса важности задачи
		await instance.put<TaskItem[]>(`important/${id}`).then(
			// В случае успешного запроса данные заносятся в state
			response => dispatch({ type: TasksActionTypes.FETCH_TASKS_SUCCESS, payload: response.data })
		).catch((err: Error | AxiosError) => {
			// В случае ошибки во время запроса данные об ошибке заносятся в state
			console.log(err);
			dispatch({ type: TasksActionTypes.FETCH_TASKS_ERROR, payload: err.message })
		});
	};
};

// Функция задания количества страниц
export const setNumberTasks = (numberTasks: number) => {
	return (dispatch: Dispatch<TasksAction>) => {
		dispatch({ type: TasksActionTypes.SET_NUMBER_TASKS, payload: numberTasks });
	}
} 
