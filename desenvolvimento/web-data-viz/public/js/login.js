
function login() {
    var email = input_email.value
    var password = input_password.value
    if (email == "" || password == "") {
        alert("teste")
    } else if (email.indexOf("@") == -1) {
        alert("email inválido")
    }
    else if (password.length < 6) {
        alert("Senha pequena")
    } else {
        fetch("/user/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                passwordServer: password
            })
        }).then(function (response) {
            console.log("ESTOU NO THEN DO entrar()!")
            console.log(response)
            if (response.ok) {
                console.log(response)
                alert("login feito")
                window.location.assign("home.html");
                response.json().then(json => {
                    sessionStorage.NAME_USER = json.name;
                    sessionStorage.ID_USER = json.id
                })
            } else
                console.log("Erro ao tentar login")
        }).catch(function (erro) {
            console.log(erro);
        })

    }
}
