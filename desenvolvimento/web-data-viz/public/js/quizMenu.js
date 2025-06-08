window.onload = function () {
    loadQuest()
    verifyIfUserAnswerQuiz()
}
var list = []
var listUserAnswer = []
function play(title, id) {
    window.location.assign("quiz.html");
    sessionStorage.TITLE_QUIZ = title;
    sessionStorage.ID_QUIZ = id;
}
function filter(difficulty) {
    if (difficulty != "#") {
        fetch("quiz/load-by-difficulty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                difficultyServer: difficulty
            })
        }).then(function (response) {
            if (response.ok) {
                quiz_box.innerHTML = ""

                response.json().then(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        console.log(response[i].title)
                        title = response[i].title
                        list.push(response[i])
                        quiz_box.innerHTML += ` 
                            <div class="quiz-card">
                            <div class="quiz-card-left">
                                <img src="./assets/img/alongamento.png" alt="">
                            </div>
                            <div class="quiz-card-rigth">
                                <h1 class="quiz-title">${response[i].title}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="full-quiz" height="20px" viewBox="0 -960 960 960" fill="#e3e3e3">
                                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                                    </svg>
                                </h1>
                                <p class="quiz-describe">${response[i].describe_quiz}</p>
                                <button class="quiz-button" onclick="play('${response[i].title}', '${response[i].id}')" >Jogar</button>
                            </div>
                        </div>`
                    }
                })
            }
        })
    }
}
function exit() {
    limparSessao()
}
function verifyIfUserAnswerQuiz() {
    var user_id = sessionStorage.ID_USER
    fetch("attempt/load-if-user-answer-quiz", {
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
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i])
                    listUserAnswer.push(response[i])
                }

            })
        }
    })
}
name_user.innerHTML = sessionStorage.NAME_USER.toUpperCase();
function loadQuest() {
    fetch("/quiz/load").then(function (response) {
        if (response.ok) {
            response.json().then(function (response) {
                console.log("Dados recebidos: ", (JSON.stringify(response)))
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i].title)

                    list.push(response[i])
                    quiz_box.innerHTML += ` 
                                <div class="quiz-card">
                                <div class="quiz-card-left">
                                    <img src="./assets/img/alongamento.png" alt="">
                                </div>
                                <div class="quiz-card-rigth">
                                    <h1 class="quiz-title">${response[i].title}
                                        <svg xmlns="http://www.w3.org/2000/svg" class="full-quiz" height="20px" viewBox="0 -960 960 960" fill="#e3e3e3">
                                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                                        </svg>
                                    </h1>
                                    <p class="quiz-describe">${response[i].describe_quiz}</p>
                                    <button class="quiz-button" onclick="play('${response[i].title}', '${response[i].id}')" >Jogar</button>
                                </div>
                            </div>`
                }
            })

        }
    })
}
