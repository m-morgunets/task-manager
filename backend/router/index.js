const Router = require("express").Router;
const tasksController = require("../controllers/tasks-controller");
const router = new Router();


// Роутер получения списка всех задач
router.get("/tasks", tasksController.getTasks);
// Роутер добавления новой задачи
router.post("/addtask/:taskText", tasksController.addTask);
// Роутер изменения статуса выполнения задачи
router.put("/completed/:id", tasksController.completedTask);
// Роутер измненения статуса важности задачи
router.put("/important/:id", tasksController.importantTask);

module.exports = router;
