module.exports = function (err, req, res, next) {
	console.log(err);
  
  // Отправка ошибки запроса на клиент
	return res.status(err.status || 400).json({
		status: err.status || 400,
		message: err.message || "there was an error processing request",
	});
};
