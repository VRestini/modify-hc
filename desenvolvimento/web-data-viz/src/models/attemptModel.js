var database = require("../database/config");
function insertAttempt(quiz_id, user_id) {
  var script = `
        INSERT INTO attempt (quiz_id, user_id) VALUES('${quiz_id}', '${user_id}'); 
    `;
  return database.executar(script);
}
module.exports = {
    insertAttempt
  };
  