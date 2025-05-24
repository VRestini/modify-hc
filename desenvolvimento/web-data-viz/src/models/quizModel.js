var database = require("../database/config")
function load(){
    var instrucaoSql = `
        select title, category, describe_quiz from quiz;
    `
    //console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
  load
};