var database = require("../database/config")
function authenticate(email, password) {
    console.log("Tentando login com:", email, password);
    var instrucaoSql = `
        SELECT name, email FROM user WHERE email = '${email}' AND password = '${password}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function register(name, email, password) {
    
    var instrucaoSql = `
        INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${password}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    authenticate,
    register
};