var database = require("../database/config");
function insertAttempt(quiz_id, user_id) {
  var script = `
        INSERT INTO attempt (quiz_id, user_id) VALUES('${quiz_id}', '${user_id}'); 
    `;
  return database.executar(script);
}
function loadAttempt(user_id) {
  var script = `
        SELECT COUNT(attempt.id) FROM attempt JOIN user ON attempt.user_id = '${user_id}'; 
    `
  return database.executar(script);
}
function loadAttemptId(user_id, quiz_id) {
  var script = `
  SELECT attempt.id FROM attempt WHERE user_id = '${user_id}' AND quiz_id = '${quiz_id}'ORDER BY date_attempt DESC LIMIT 1; 
`
  return database.executar(script);
}
module.exports = {
  insertAttempt,
  loadAttempt,
  loadAttemptId
};
