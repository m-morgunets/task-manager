const express = require("express");
const cors = require("cors");
const router = require("./router");
const errorMiddlewares = require("./middlewares/error-middlewares");

const PORT = 5000; // Указание порта сервера
const app = express(); // Создание экспресс-приложения

app.use(express.json({ extended: true }));
// Включение CORS при запросах от клиентской части приложения
app.use(
	cors({
		credentials: true,
		origin: "http://localhost",
	})
);
// Указание роутеров
app.use("/api", router);
// Использование обработчика ошибок в качестве middlewares
app.use(errorMiddlewares);

// Запуск сервера
const server = app.listen(PORT, (error) => {
	if (error) return console.log(`Error: ${error}`);

	console.log(`Server listening on port ${server.address().port}`);
});
