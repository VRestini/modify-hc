window.onload = function () {
    updateValues()
    loadAcountAlternatives()
    loadSumDifficulty()
    loadDifficulty()
}
function loadSumDifficulty() {
    var user_id = sessionStorage.ID_USER
    fetch("/attempt/load-difficulty-sum", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: user_id
        })
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (response) {

                let SumDifficulty = Number(response[0]?.['SUM(quiz.difficulty)'] || 0);
                let acountQuiz = Number(sessionStorage.QUIZ_ANSWERED || 0);


                quiz_difficulty_avg.innerHTML = (acountQuiz > 0 ? (SumDifficulty / acountQuiz).toFixed(0) : 0);
            })
        }
    })
}
function loadDifficulty() {
    var user_id = sessionStorage.ID_USER
    fetch("/attempt/load-difficulty", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: user_id
        })
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (response) {
                let df1 = 0
                let df2 = 0
                let df3 = 0
                for (let i = 0; i < response.length; i++) {

                    if (response[i].difficulty == '1')
                        df1++
                    else if (response[i].difficulty == 2)
                        df2++
                    else
                        df3++
                }
                sessionStorage.DF1 = df1
                sessionStorage.DF2 = df2
                sessionStorage.DF3 = df3
            })
        }
    })
}

function updateValues() {
    var user_id = sessionStorage.ID_USER
    fetch("/attempt/load", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: user_id
        })
    }).then(function (response) {
        console.log("To no then")
        console.log(response.body)
        if (response.ok) {
            response.json().then(function (response) {
                sessionStorage.QUIZ_ANSWERED = response[0]['COUNT(attempt.id)']
                quiz_total_attempt.innerHTML = response[0]['COUNT(attempt.id)']
            })

            console.log(response)
        }

        else
            alert("imbecil")
    })
}
function loadAcountAlternatives() {
    var user_id = sessionStorage.ID_USER
    var attempt_id = sessionStorage.ID_ATTEMPT
    fetch("user-answer/load-alternatives", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            attemptServer: attempt_id,
            userServer: user_id
        })
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (response) {
                let wrong = Number(response[0]?.['SUM(wrong_answer)'] || 0)
                let right = Number(response[0]?.['SUM(rigth_answer)'] || 0)

                sessionStorage.WRONG_ALERNATIVES = wrong
                sessionStorage.RIGTH_ALERNATIVES = right
                console.log(wrong)
                quiz_tentatives_total.innerHTML = right + wrong
            })
            console.log(response)
        }
       
    })
}