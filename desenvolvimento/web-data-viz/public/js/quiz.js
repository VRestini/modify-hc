

var alternativeList = [];
var questionList = [];
var i = 0;
var score = 0
window.onload = function () {
    loadQuest().then(() => {
        if (questionList.length > 0)
            showQuest();
        loadAlternative(questionList[i].id).then(() => {
            displayAlternatives();
        });
    })
}

function showQuest() {
    question_number.innerHTML = `QUESTÃO ${i + 1}`;
    question_title.innerHTML = questionList[i].title;
}

async function play(alternative) {
    if (alternativeList[alternative].wrong == 0)
        score++
    i++;
    if (i < questionList.length) {
        showQuest();
        await loadAlternative(questionList[i].id);
        displayAlternatives();
    } else {

        await Swal.fire({
            title: "Quiz finalizado!",
            text: `Você acertou ${score} questões de ${questionList.length}.`,
            background: '#1a1a1a', 
            color: '#ffffff',
            draggable: true,
            confirmButtonColor: '#3a0175',
            timer: 5000
        }).then((result) => {
            window.location.assign("home.html");
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