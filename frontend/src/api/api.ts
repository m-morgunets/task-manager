import { TaskItem } from "./../types/tasks";
import axios, { AxiosError } from "axios";

// Задание базового url при запрсое
const instance = axios.create({
	baseURL: "http://localhost:5000/api/",
});

export const tasksAPI = {
	getTasks: async () => {
		return await instance.get<TaskItem[]>("tasks");
	},
	addTask: async (taskText: string) => {
		return await instance.post<TaskItem[]>(`addtask/${taskText}`);
	},
	toggleCompletedTask: async (id: string) => {
		return await instance.put<TaskItem[]>(`completed/${id}`);
	},
	toggleImportantTask: async (id: string) => {
		return await instance.put<TaskItem[]>(`important/${id}`);
	},
};
