import { tasksAPI } from './../../api/api';
import { TaskItem, TasksAction, TasksActionTypes } from "./../../types/tasks";
import { Dispatch } from "redux";
import axios, {AxiosError} from "axios";

// Задание базового url при запрсое 
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

// Acrion Creator перед началом запроса
const fetchTasksAC = (): TasksAction => ({
	type: TasksActionTypes.FETCH_TASKS
})
// Acrion Creator при успешном выполнении запроса 
const fetchTasksSuccessAC = (taskItem: TaskItem[]): TasksAction => ({
	type: TasksActionTypes.FETCH_TASKS_SUCCESS,
	payload: taskItem,
})
// Acrion Creator при неудачном выполнении запроса
const fetchTasksErrorAC = (message: string): TasksAction => ({
	type: TasksActionTypes.FETCH_TASKS_ERROR, payload: message 
})

// Обработчик ошибок
const handlerErr = (error: Error | AxiosError, dispatch: Dispatch<TasksAction>) => {
	// Утверждение типа ошибки
	console.log(error);
	// В случае ошибки во время запроса данные об ошибке заносятся в state
	dispatch(fetchTasksErrorAC(error.message))
}

// Функция получения списка задач
export const getTasks = () => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch(fetchTasksAC());
		try {
			// Запрос за списком задач
			const response = await tasksAPI.getTasks();
			// В случае успешного запроса данные заносятся в state
			dispatch(fetchTasksSuccessAC(response.data))
		} catch (error) {
			// Функция обработки ошибок
			handlerErr(error as Error | AxiosError, dispatch);
		}
	};
};

// Функция добавления новой задачи
export const addTask = (taskText: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch(fetchTasksAC());
		try {
			// Запрос за списком задач
			const response = await tasksAPI.addTask(taskText);
			// В случае успешного запроса данные заносятся в state
			dispatch(fetchTasksSuccessAC(response.data))
		} catch (error) {
			// Функция обработки ошибок
			handlerErr(error as Error | AxiosError, dispatch);
		}
	};
};

// Фукнция изменения статуса выполнения задачи
export const toggleCompletedTask = (id: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch(fetchTasksAC());
		try {
			// Запрос за списком задач
			const response = await tasksAPI.toggleCompletedTask(id);
			// В случае успешного запроса данные заносятся в state
			dispatch(fetchTasksSuccessAC(response.data))
		} catch (error) {
			// Функция обработки ошибок
			handlerErr(error as Error | AxiosError, dispatch);
		}
	};
};

// Фукнция изменения статуса важности задачи
export const toggleImportantTask = (id: string) => {
	return async (dispatch: Dispatch<TasksAction>) => {
		// Использование экшена перед началом запроса
		dispatch(fetchTasksAC());
		try {
			// Запрос за списком задач
			const response = await tasksAPI.toggleImportantTask(id);
			// В случае успешного запроса данные заносятся в state
			dispatch(fetchTasksSuccessAC(response.data))
		} catch (error) {
			// Функция обработки ошибок
			handlerErr(error as Error | AxiosError, dispatch);
		}
	};
};

// Функция задания количества страниц
export const setNumberTasks = (numberTasks: number) => {
	return (dispatch: Dispatch<TasksAction>) => {
		dispatch({ type: TasksActionTypes.SET_NUMBER_TASKS, payload: numberTasks });
	}
} 
