
function login() {
    var email = input_email.value
    var password = input_password.value
    if (email == "" || password == "") {
        Swal.fire({
            title: "Preencha todos os campos!",
            background: '#1a1a1a', 
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        })
    } else if (email.indexOf("@") == -1) {
        Swal.fire({
            title: "Email inválido!",
            background: '#1a1a1a', 
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        })
    }
    else if (password.length < 6) {
        Swal.fire({
            title: "A senha tem que ter mais que 6 caracteres!",
            background: '#1a1a1a', 
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        })
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
                Swal.fire({
                    title: "Login realizado!",
                    background: '#1a1a1a', 
                    color: '#ffffff',
                    draggable: true,
                    confirmButtonColor: '#3a0175',
                    timer: 5000
                }).then((result) => {
                    window.location.assign("home.html");
                })
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
