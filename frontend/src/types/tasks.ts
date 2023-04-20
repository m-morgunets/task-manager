// Интерфейс состояния
export interface TasksState {
	tasks: TaskItem[];
	isLoading: boolean;
	error: null | string;
	numberTasks: number;
}

// Интерфейс отдельной задачи
export interface TaskItem {
	id: string;
	text: string;
	isCompleted: boolean;
	isImportant: boolean;
}

// Перечисление констант
export enum TasksActionTypes {
	FETCH_TASKS = "FETCH_TASKS",
	FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
	FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
	SET_NUMBER_TASKS = "SET_NUMBER_TASKS"
}

// Интерфейсы для action-creator-ов 
interface FetchTasksAction {
	type: TasksActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
	type: TasksActionTypes.FETCH_TASKS_SUCCESS;
	payload: TaskItem[];
}

interface FetchTasksErrorAction {
	type: TasksActionTypes.FETCH_TASKS_ERROR;
	payload: string;
}

interface SetNumberTasks {
	type: TasksActionTypes.SET_NUMBER_TASKS;
	payload: number;
}

export type TasksAction = FetchTasksAction | FetchTasksSuccessAction | FetchTasksErrorAction | SetNumberTasks;
