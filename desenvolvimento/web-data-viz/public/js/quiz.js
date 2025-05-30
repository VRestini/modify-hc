var alternativeList = []
var questionList = []
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
                /*for (var i = 0; i < response.length; i++) {
                    questionList.push(response[i])
                    console.log(response[i])
                }*/
            })
        }
    })
}
function loadAlternative(controller) {
    alternativeList = []
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
            //alternativeList = []
            response.json().then(function (data) {
                alternativeList = data;
                console.log("Alternatives loaded:", alternativeList);
                displayAlternatives()
                
                
                /*for (var i = 0; i < response.length; i++) {
                    alternativeList.push(response[i])
                    console.log(response[i])
                }*/
                
            });
        }
    })
}
function displayAlternatives() {
        
    
    alternative_1.innerHTML = alternativeList[0].content
    alternative_2.innerHTML = alternativeList[1].content
    alternative_3.innerHTML = alternativeList[2].content
    alternative_4.innerHTML = alternativeList[3].content
    
    /*for (let j = 0; j < alternativeList.length; j++) {
        var altDiv = document.getElementById(`alternative_${j + 1}`);
        console.log(altDiv)
        if (altDiv) {
            altDiv.innerHTML = `${j + 1}. <p>${alternativeList[j].content}</p>`;
        }
    }*/
}