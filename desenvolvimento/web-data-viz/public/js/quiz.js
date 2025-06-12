

var alternativeList = [];
var questionList = [];
var i = 0;
var score = 0
var scoreError = 0
window.onload =  function () {
    loadQuest().then(async () => {
        if (questionList.length > 0)
            showQuest();
        loadAlternative(questionList[i].id).then(() => {
            displayAlternatives();
        });
        newAttempt()
        setTimeout(() => {
            loadAttemptId();
        }, 200);
        
    })
}
async function loadAttemptId(){
    let user_id = sessionStorage.ID_USER
    let quiz_id = sessionStorage.ID_QUIZ
    fetch("attempt/load-id", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userServer: user_id,
            quizServer: quiz_id
        })
    }).then(function(response){
        if(response.ok)
            response.json().then(function (data) {
                console.log(`AAAAAAAAAAAAAAAAAAAAaa attempt id: ${data.id}`)
                sessionStorage.ID_ATTEMPT = data.id
            });
            
    })
}
async function userAnswer(){
    let attempt_id = sessionStorage.ID_ATTEMPT
    let wrongAnswers = scoreError;
    let rightAnswers = score;
    console.log(`Enviando: attempt=${attempt_id}, wrong=${wrongAnswers}, right=${rightAnswers}`)
    fetch("user-answer/add-alternative", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            attemptServer: attempt_id,
            wrongServer : wrongAnswers,
            rightServer : rightAnswers
        })
    }).then(function(response){
        if(response.ok)
            console.log("User answer insert!")
    })
}
function newAttempt(){
    let user_id = sessionStorage.ID_USER
    let quiz_id = sessionStorage.ID_QUIZ
    fetch("attempt/add",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userServer: user_id,
            quizServer: quiz_id
        })
    }).then(function(response){
        if(response.ok)
            console.log("Attempt insert!")
    })
}


function showQuest() {
    question_number.innerHTML = `QUESTÃO ${i + 1}`;
    question_title.innerHTML = questionList[i].title;
}

async function play(alternative) {
    
    if (alternativeList[alternative].wrong == 0)
        score++
    else
        scoreError++
    i++;
    if (i < questionList.length) {
        showQuest();
        await loadAlternative(questionList[i].id);
        displayAlternatives();
    } else {
        
        sessionStorage.RIGTH_ALERNATIVES = score
        sessionStorage.WRONG_ALERNATIVES = scoreError
        await userAnswer()
        await loadDifficulty()
        
        await Swal.fire({
            title: "Quiz finalizado!",
            text: `Você acertou ${score} questões de ${questionList.length}.`,
            background: '#1a1a1a', 
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        }).then((result) => {
            window.location.assign("quizMenu.html");
        })
        
    }
}

function loadQuest() {
    return fetch("quiz/load-question", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            quizServer: sessionStorage.TITLE_QUIZ
        })
    }).then(function (response) {
        if (response.ok) {
            return response.json().then(function (data) {
                questionList = data;
            });
        }
    });
}
async function loadDifficulty() {
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
function loadAlternative(controller) {
    return fetch("quiz/load-alternatives", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idQuestionServer: controller
        })
    }).then(function (response) {
        if (response.ok) {

            return response.json().then(function (data) {
                alternativeList = data;
            });
            //console.log("Alternatives loaded:", alternativeList);
        }
    })
}

function displayAlternatives() {
    if (alternativeList.length >= 4) {
        alternative_1.innerHTML = "1. " + alternativeList[0].content;
        alternative_2.innerHTML = "2. " + alternativeList[1].content;
        alternative_3.innerHTML = "3. " + alternativeList[2].content;
        alternative_4.innerHTML = "4. " + alternativeList[3].content;
    }
}