var database = require("../database/config")
function load(){
    var script = `
        select title, describe_quiz from quiz;
    `
    //console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(script);
}
function loadDifficulty(difficulty){
    var script = `
        select title, describe_quiz from quiz WHERE difficulty = '${difficulty}';
    `
    return database.executar(script);
}
module.exports = {
  load,
  loadDifficulty
};