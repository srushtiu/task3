const questions =[
     {
          question: "What does www stand for?",
          answers: [
               { text:"a) World Wide Window ", correct: false},
               { text:"b) World Wide Web", correct: true},
               { text:"c) Wide World Website", correct: false},
               { text:"d) Web World Wide", correct: false},
          ]
     },
      {
          question: " What is the full form of Wi-Fi?",
          answers: [
               { text:"a) Wireless Finder", correct: false},
               { text:"b) Wide Fidelity", correct: false},
               { text:"c) Wireless Fidelity", correct: true},
               { text:"d) Web Fiber", correct: false},
          ]
     },
      {
          question: " Which device is used to connect different networks?",
          answers: [
               { text:"a) Switch", correct: false},
               { text:"b) Router", correct: true},
               { text:"c) Hub", correct: false},
               { text:"d) Modem ", correct: false},
          ]
     },
      {
          question: " What does IP stand for in networking? ",
          answers: [
               { text:"a) Internet Page", correct: false},
               { text:"b) Internal Program", correct: false},
               { text:"c) Internet Protocol", correct: true},
               { text:"d) Instant Processing", correct: false},
          ]
     },
      {
          question: " Which company created the web browser “Chrome”? ",
          answers: [
               { text:"a) Microsoft", correct: false},
               { text:"b) Apple", correct: false},
               { text:"c) Google", correct: true},
               { text:"d) Mozilla", correct: false},
          ]
     },
      {
          question: " What does HTTP stand for? ",
          answers: [
               { text:"a) HyperText Transfer Protocol", correct: true},
               { text:"b) HighText Transmission Process", correct: false},
               { text:"c) Hyper Tool Transfer Program", correct: false},
               { text:"d) Home Transfer Text Protocol", correct: false},
          ]
     },
      {
          question: " Which is faster 4G or 5G?",
          answers: [
               { text:"2G", correct: false},
               { text:"5G", correct: true},
               { text:"4G", correct: false},
               { text:"3G-", correct: false},
          ]
     },
      {
          question: " What is the full form of URL? ",
          answers: [
               { text:"a) Unified Research Link", correct: false},
               { text:"b) Uniform Resource Locator", correct: true},
               { text:"c) Universal Routing Link", correct: false},
               { text:" d) User Resource Line" , correct: false},
          ]
     },
      {
          question: " Which device is called the “brain” of a computer network? ",
          answers: [
               { text:"a) Server", correct: true},
               { text:"b) Switch", correct: false},
               { text:"c) Router", correct: false},
               { text:"d) Modem", correct: false},
          ]
     },
      {
          question: "What is used to protect a network from hackers? ",
          answers: [
               { text:"a) Antivirus", correct: false},
               { text:"b) Firewall", correct: false},
               { text:"c) VPN", correct: true},
               { text:"d) Proxy Server", correct: false},
          ]
     }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
     currentQuestionIndex = 0;
     score =0;
     nextButton.innerHTML = "Next";
     showQuestion();
}
function showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + " . " + currentQuestion.
     question;

     currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButtons.appendChild(button);
          if(answer.correct){
               button.dataset.correct=answer.correct;
          }
          button.addEventListener("click",selectAnswer);
     });
}

function resetState(){
     nextButton.style.display = "none";
     while(answerButtons.firstChild){
          answerButtons.removeChild(answerButtons.firstChild);
     }
}
function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
          selectedBtn.classList.add("correct");
          score++;
     }
     else{
          selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === "true"){
               button.classList.add("correct");
          }
          button.disabled = true;
 });
     nextButton.style.display = "block";
     }
      function showScore(){
          resetState();
          questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
          nextButton.innerHTML = "Play Again";
          nextButton.style.display ="block";
      }
function  handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
          showQuestion();
     }else{
          showScore();
     }
}
     nextButton.addEventListener("click", () =>{
          if(currentQuestionIndex < questions.length){
               handleNextButton();
          }else{
               startQuiz();
          }
          
     });

startQuiz();