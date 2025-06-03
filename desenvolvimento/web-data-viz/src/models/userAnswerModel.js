var database = require("../database/config");
function insertUserAnswer(attempt_id, wrong, right) {
  var script = `
        INSERT INTO user_answer(attempt_id, wrong_answer, rigth_answer) values( '${attempt_id}', '${wrong}', '${right}') ;
    `;
  return database.executar(script);
}
function loadAcountUserAnswer(attempt_id, user_id){
  var script = `
        SELECT SUM(wrong_answer), SUM(rigth_answer) from user_answer JOIN attempt ON attempt_id = attempt.id WHERE attempt.user_id = '${user_id}' ;
    `;
  return database.executar(script);
}
module.exports = {
  insertUserAnswer,
  loadAcountUserAnswer
};
