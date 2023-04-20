const uuid = require("uuid");

// Массив текстов для создания массива задач 
const arrTasksText = [
	"Выполнить тестовое задание",
	"Залить его на GitHub",
	"Дать доступ к репозиторию для проверки",
	"Поговорить по телефону с Директором Gemforge",
	"Получить офер и начать работать!",
];

// Создание массива задач 
let tasks = arrTasksText.map((taskText, index) => ({
	id: uuid.v4(), // Генерация случайного id
	text: taskText,
	isCompleted: false,
	isImportant: false,
}));

class TokenService {
	// Функция получения списка задач
	getTasks() {
		return tasks;
	}

	// Функция добавления новой задачи в массив
	addTask(textTask) {
		const newTaskItem = {
			id: uuid.v4(),
			text: textTask,
			isCompleted: false,
			isImportant: false,
		};
		tasks.push(newTaskItem);
		return tasks;
	}

	// Функция измненения статуса выполнения задачи в массиве
	completedTask(id) {
		tasks.map((item) => {
			if (item.id === id) item.isCompleted = !item.isCompleted;
		});
		return tasks;
	}

	// Функция измненения статуса важности задачи в массиве
	importantTask(id) {
		tasks.map((item) => {
			if (item.id === id) item.isImportant = !item.isImportant;
		});
		return tasks;
	}
}

module.exports = new TokenService();
