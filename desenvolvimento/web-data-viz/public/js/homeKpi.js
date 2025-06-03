window.onload = updateValues()

function updateValues() {
    var teste =sessionStorage.ID_USER
    fetch("/attempt/load", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: teste
        })
    }).then(function(response){
        console.log("To no then")
        console.log(response.body)
        if(response.ok){
            response.json().then(function(response){
                quiz_total_attempt.innerHTML = response[0]['COUNT(attempt.id)']
            })
            
            console.log(response)
        }
            
        else
            alert("imbecil")
    })
}