function register() {
    var name = input_name.value
    var email = input_email.value
    var password = input_password.value
    var passwordConfirm = input_password_confirm.value
    if (email == "" || password == "" || name == "" || passwordConfirm == "") {
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
            title: "A senha deve possuir mais de 5 caracteres!",
            background: '#1a1a1a',
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        })
    } else if (passwordConfirm != password) {
        Swal.fire({
            title: "As senhas são diferentes!",
            background: '#1a1a1a',
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        })
    } else {
 
        fetch("/user/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailServer: email,
            }),
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (response) {
                    if (response.length == 0)
                        fetch("/user/register", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                nameServer: name,
                                emailServer: email,
                                passwordServer: password
                            }),
                        }).then(function (response) {
                            if (response.ok)
                                Swal.fire({
                                    title: "Cadastro realizado!",
                                    background: '#1a1a1a',
                                    color: '#ffffff',
                                    draggable: true,
                                    confirmButtonColor: '#3a0175',
                                    timer: 5000
                                }).then((result) => {
                                    window.location.assign("login.html");
                                })
                        })
                    else {
                        Swal.fire({
                            title: "Email já cadastrado!",
                            background: '#1a1a1a',
                            color: '#ffffff',
                            draggable: true,
                            confirmButtonColor: '#3a0175',
                            timer: 5000
                        })
                    }
                })

            }
        })
    }
}