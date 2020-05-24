const loadQuestion = () => {
    questionArea = document.getElementById("question");
    answerElem = document.getElementById("answer");
    const questionGenerator = tableQuestionGenerator();

    var qna = questionGenerator.next().value;
    //console.log(qna);
    questionArea.innerHTML = qna.question;
    answerElem.value = qna.answer;
};

const foo = function* () {
    yield 10;
    yield 20;
  };
  
  
const tableQuestionGenerator = function* () {
    tables = new Array();
    for (let x = 2; x < 21; x++){
        for (let y = 2; y < 10; y++){
            tables.push([x,y,x*y]);
        }
    }

    shuffle(tables);

    while(true){
        idx = getRndInteger(1,tables.length);
        m = getRndInteger(0,2);
        elem = tables[idx];
        ans = elem[m];
        elem[m] = '___';
        question = elem[0] + '  x  ' + elem[1] + '  =  ' + elem[2];
        yield {question: question,answer: ans};
    }    
 };

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

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
};


/* Add listener to user_answer */
document.getElementById("user_answer").addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("user_answer_submit").click();
    }
});
