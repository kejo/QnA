const loadQuestion = () => {
    questionArea = document.getElementById("question");
    answer = document.getElementById("answer");
    let m = getRndInteger(2,20);
    let n = getRndInteger(2,9);
    questionArea.innerHTML = "What is " + m + " times " + n + " ?";
    answer.value = m*n;
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const checkAnswer = () => {
    user_answer = document.getElementById("user_answer").value;
    answer = document.getElementById("answer").value;
    result = document.getElementById("result");
    if(answer == user_answer){
        /* Clear the text box */
        document.getElementById("user_answer").value = "";
        result.innerHTML = "Correct Answer";
        result.classList.remove("wrong");
        result.classList.add("correct");
        loadQuestion();
    }else{
        result.innerHTML = "Wrong Answer. Try Again";
        result.classList.remove("correct");
        result.classList.add("wrong");
    }
}


/* Add listener to user_answer */
document.getElementById("user_answer").addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("user_answer_submit").click();
    }
});
