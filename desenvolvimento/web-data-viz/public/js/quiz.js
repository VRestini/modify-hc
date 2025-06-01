/*var alternativeList = []
var questionList = []

var i = 0
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
    question_number.innerHTML = `QUESTÃO ${i + 1}`
    question_title.innerHTML = questionList[i].title
}
async function play() {
    i++
    if (i < questionList.length) {
        showQuest()
        await loadAlternative(questionList[i].id);
        displayAlternatives();
    }
    else {
        alert("aa")
        window.location.assign("home.html")
    }
}


function loadQuest() {
    fetch("quiz/load-question", {
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
            })
        }
    })
}
function loadAlternative(controller) {
    fetch("quiz/load-alternatives", {
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
        alternative_1.innerHTML = alternativeList[0].content
        alternative_2.innerHTML = alternativeList[1].content
        alternative_3.innerHTML = alternativeList[2].content
        alternative_4.innerHTML = alternativeList[3].content
    }

}*/
var alternativeList = [];
var questionList = [];
var i = 0;

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

async function play() {
    i++;
    if (i < questionList.length) {
        showQuest();
        await loadAlternative(questionList[i].id);
        displayAlternatives();
    } else {
        alert("Quiz concluído!");
        window.location.assign("home.html");
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
    }).then(function(response) {
        if (response.ok) {
            return response.json().then(function(data) {
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
    if(alternativeList.length >= 4) {
        alternative_1.innerHTML = "1. " + alternativeList[0].content;
        alternative_2.innerHTML = "2. " + alternativeList[1].content;
        alternative_3.innerHTML = "3. " + alternativeList[2].content;
        alternative_4.innerHTML = "4. " + alternativeList[3].content;
    }
}