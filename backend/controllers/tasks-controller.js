const tasksService = require("../service/tasks-service");

class TasksController {
	// Функция получения задач, используемая в роутере
	async getTasks(req, res, next) {
		try {
			const tasks = tasksService.getTasks();
			res.status(200).json(tasks);
		} catch (e) {
			// Обработка ошибки
			console.log(e);
			next({ status: 400, message: "failed to get todos" });
		}
	}

	// Функция добавления задачи, используемая в роутере
	async addTask(req, res, next) {
		try {
			// Получение в параметрах запроса текста новой задачи
			const taskText = req.params.taskText;

			const tasks = tasksService.addTask(taskText);
			res.status(200).json(tasks);
		} catch (e) {
			// Обработка ошибки
			console.log(e);
			next({ status: 400, message: "failed to create todo" });
		}
	}

	// Функция измненения статуса выполнения задачи, используемая в роутере
	async completedTask(req, res, next) {
		try {
			// Получение в параметрах запроса id изменяемой задачи
			const id = req.params.id;

			const tasks = tasksService.completedTask(id);
			res.status(200).json(tasks);
		} catch (e) {
			// Обработка ошибки
			console.log(e);
			next({ status: 400, message: "failed to update todo" });
		}
	}

	// Функция измненения статуса важности задачи, используемая в роутере
	async importantTask(req, res, next) {
		try {
			// Получение в параметрах запроса id изменяемой задачи
			const id = req.params.id;

			const tasks = tasksService.importantTask(id);
			res.status(200).json(tasks);
		} catch (e) {
			// Обработка ошибки
			console.log(e);
			next({ status: 400, message: "failed to update todo" });
		}
	}
}

module.exports = new TasksController();
