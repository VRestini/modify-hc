var database = require("../database/config");
function insertUserAnswer(attempt_id, wrong, right) {
  var script = `
        INSERT INTO user_answer(attempt_id, wrong, right) values( '${attempt_id}', '${wrong}', '${right}') ;
    `;
  return database.executar(script);
}

module.exports = {
  insertUserAnswer
};
