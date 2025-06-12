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
        SELECT question.id, question.title FROM question JOIN quiz ON quiz.id = question.quiz_id WHERE quiz.title = '${titleQuiz}';
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
