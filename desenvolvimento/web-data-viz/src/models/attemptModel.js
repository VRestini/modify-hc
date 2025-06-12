var database = require("../database/config");
function insertAttempt(quiz_id, user_id) {
  var script = `
        INSERT INTO attempt (quiz_id, user_id) VALUES('${quiz_id}', '${user_id}'); 
    `;
  return database.executar(script);
}
function loadAttempt(user_id) {
  var script = `
        SELECT COUNT(attempt.id) FROM attempt WHERE attempt.user_id ='${user_id}'; 
    `
  return database.executar(script);
}
function loadAttemptId(user_id, quiz_id) {
  var script = `
  SELECT attempt.id FROM attempt WHERE user_id = '${user_id}' AND quiz_id = '${quiz_id}'ORDER BY date_attempt DESC LIMIT 1; 
`
  return database.executar(script);
}
function loadAttemptTotalDifficulty(user_id){
  var script = `
  SELECT SUM(quiz.difficulty) FROM quiz JOIN attempt ON attempt.quiz_id = quiz.id WHERE attempt.user_id = '${user_id}'; 
`
  return database.executar(script);
}
function loadAttemptDifficulty(user_id){
  var script = `
  SELECT quiz.difficulty FROM quiz JOIN attempt ON attempt.quiz_id = quiz.id WHERE attempt.user_id = '${user_id}'; 
`
  return database.executar(script);
}
function loadIfUserAnswerQuiz(user_id){
  var script = `
  SELECT DISTINCT(title) FROM quiz JOIN attempt  ON attempt.quiz_id = quiz.id WHERE attempt.user_id = '${user_id}'; 
`
  return database.executar(script);
}

module.exports = {
  insertAttempt,
  loadAttempt,
  loadAttemptId,
  loadAttemptDifficulty,
  loadAttemptTotalDifficulty,
  loadIfUserAnswerQuiz
};
