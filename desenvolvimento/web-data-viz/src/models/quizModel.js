var database = require("../database/config");
function load() {
  var script = `
        select id, title, describe_quiz from quiz;
    `;
  //console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(script);
}
function loadDifficulty(difficulty) {
  var script = `
        select title, describe_quiz from quiz WHERE difficulty = '${difficulty}';
    `;
  return database.executar(script);
}
function loadQuestion(titleQuiz) {
  var script = `
        select question.id, question.title from question JOIN quiz on quiz.title = '${titleQuiz}'
    `;
  return database.executar(script);
}
function loadAlternatives(idQuestion) {
  var script = `
        select alternatives.id, content, wrong from alternatives where alternatives.question_id = '${idQuestion}' ;
    `;
  return database.executar(script);
}

module.exports = {
  load,
  loadDifficulty,
  loadQuestion,
  loadAlternatives,

};
