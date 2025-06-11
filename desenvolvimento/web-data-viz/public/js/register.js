function register(){
    var name = input_name.value
    var email = input_email.value
    var password = input_password.value
    var passwordConfirm = input_password_confirm.value
    if(email == "" || password == ""|| name ==""||passwordConfirm==""){
        
    }else if(email.indexOf("@")==-1){
        
    }
    else if(password.length < 6){
        //
    }else if(passwordConfirm != password){

    }else{
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
        }).then(function(response){
            if(response.ok)
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

        

        
    }
}