window.onload = function(){
    updateValues()
    loadAcountAlternatives()
}


function updateValues() {
    var user_id =sessionStorage.ID_USER
    fetch("/attempt/load", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: user_id
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
function loadAcountAlternatives(){
    var user_id =sessionStorage.ID_USER
    var attempt_id=sessionStorage.ID_ATTEMPT
    fetch("user-answer/load-alternatives",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            attemptServer: attempt_id,
            userServer: user_id
        })
    }).then(function(response){
        if(response.ok){
            response.json().then(function(response){
                quiz_tentatives_total.innerHTML = response[0]['SUM(wrong_answer) + SUM(rigth_answer)']  
            })   
            console.log(response)
        }
        else
            alert("imbecil")
    })
}