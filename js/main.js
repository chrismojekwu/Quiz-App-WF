"use strict";
//QUESTIONS STORE

const STORE = [
    {
       question: "Where was Michael Jordan born?" ,
       answers:[ "Chicago, Illinois",
                 "Charlotte, North Carolina",
                 "Brooklyn, New York",
                 "Philadelphia, Pennsylvania"],
       correct:  "Brooklyn, New York",
       photo: ["img/mikekid.jpg" , "Michael Jordan as a child."]
    },
    {
        question: "How long did MJ stay in college before entering the Nba Draft?",
        answers:[ "All Four years.",
                  "After his junior season.",
                  "After his sophmore season.",
                  "One and done."],
        correct:  "After his junior season.",
        photo: ["img/mikeunc.jpg","Michael Jordan playing for the Univesity of North Carolina"]
     },
     {
        question: "Which of the following teams did MJ play for?" ,
        answers:[ "Washington Wizards",
                  "Birmingham Barons",
                  "Scottsdale Scorpions",
                  "All of the above."],
        correct:  "All of the above.",
        photo: ["img/mikegolf.jpeg","Michael Jordan playing golf"]
     },
     {
        question: "Of MJs six NBA championship wins, how many times did he also win the Finals MVP award?" ,
        answers:[ "Six times",
                  "Once",
                  "Never",
                  "Four times"],
        correct:  "Six times",
        photo: ["img/mike6rings.jpg","Portrait of Michael Jordan displaying six championship rings"]
     },
     {
        question: "Every few years there is a passing of the torch of sorts for the best player in the NBA. Which set of players came before & after MJ?" ,
        answers:[ "Julius Irving & Giannis Antetokounmpo",
                  "Larry Bird & Allen Iverson",
                  "Grant Hill & Lebron James",
                  "Magic Johnson & Kobe Bryant"],
        correct:  "Magic Johnson & Kobe Bryant",
        photo: ["img/mikedreamteam.jpg","Michael Jordan with Larry Bird & Magic Johnson in a photo for USA Basketball"]
     }
]; 

///START QUIZ

function startQuiz() {
  $('.quizbox').on('click','.quiz-start', e => {
   renderQuestion();
   console.log('click!');
  });
};

//console.log($('.questions'))


let questionNum = 0; //variable for question number
let score = 0; //variable for score

function renderQuestion(){
    $('.quizbox').on('click','.quiz-start', e => {
       //get question html //replace container html with question html
        $('.quizbox').html(createQuestionHtml());

        console.log("question rendered")
       });
      
      
      
      //call submit answer
};

function createQuestionHtml(){
    return `<section class="quizbox">
         ${questionNum + 1} of 5
         <br>${score} made, ${questionNum  - score} missed
    <br><div id="photo"><img class="quesPhoto" src="${STORE[questionNum].photo[0]}" alt="${STORE[questionNum].photo[1]}"></div>
    <h1>${STORE[questionNum].question}</h1>
    <form>
      <input type="radio" name="question-answers" class="${STORE[questionNum].answers[0]}">
      ${STORE[questionNum].answers[0]}
      <br>
      <input type="radio" name="question-answers" class="${STORE[questionNum].answers[1]}">
      ${STORE[questionNum].answers[1]}
      <br>
      <input type="radio" name="question-answers" class="${STORE[questionNum].answers[2]}">
      ${STORE[questionNum].answers[2]}
      <br>
      <input type="radio" name="question-answers" class="${STORE[questionNum].answers[3]}">
      ${STORE[questionNum].answers[3]}
      <br>
      <input type="button" class="submit" value="Shoot">
    </form>
      </section>`
};


function handleSubmitAnswer(){
 //listen to answer choice - event handler // event object
  $('.quizbox').on('click',".submit", e => { 
    let answer = $("input:checked")//.length;
     //let answerBool = false;
    if ($("input:checked").length < 1){
        alert('"I can accept failure, everyone fails at something. But I can\'t accept not trying."' + " - Michael Jordan")
    } else if (answer.hasClass(`${STORE[questionNum].correct}`) === true){
        $('.quizbox').html(rightHtml());
    } else {
        $('.quizbox').html(wrongHtml());
    }
    clickNextQuestion();
    console.log("answer submitted")
  })
  //answerFeedback(answerBool)
};

/*function answerFeedback(){
    //get answer value//stored answer value
    $('.quizbox').on('click',".submit", e => { 
     if (answerBool === true){
        $('.quizbox').html(rightHtml());
     } else {
        $('.quizbox').html(wrongHtml());
     }
    //create a wrong or right feedback screen
   
    //update to the next question
    })
};*/
const rightWrongPhoto = ["img/mikehappy.jpg","img/mikecrying.jpg"];

function rightHtml(){
    //clickNextQuestion();
    score++
    if(questionNum + 1 === STORE.length){
        return `<section class="quizbox">
        <h1>Score!</h1>
       <div id="photo">
       <img class ="checkAnsPhoto" src ="${rightWrongPhoto[0]}"</div>
       <br>Right Answer!
       <p> "Talent wins games, but teamwork and intelligence wins championships."
           <br>  - Michael Jordan
       </p>
            <br>
    <input type="button" class="checkScore" value="Did I make the team?">
    </section>`
    } else {
    return `<section class="quizbox">
    <h1>Score!</h1>
    <div id="photo">
    <img class ="checkAnsPhoto" src ="${rightWrongPhoto[0]}"</div>
   <br>Right Answer!
   <p> "Talent wins games, but teamwork and intelligence wins championships."
       <br>  - Michael Jordan
   </p>
        <br>
<input type="button" class="nextQuestion" value="Next Question">
</section>`
    }
    
};

function wrongHtml(){
    //clickNextQuestion();
    if(questionNum + 1 === STORE.length){
        return `<section class="quizbox">
        <h1>Miss!</h1>
        <div id="photo">
        <img class ="checkAnsPhoto" src ="${rightWrongPhoto[1]}"</div>
       <br>Wrong Answer!
       <p> "The key to success is failure."
           <br>  - Michael Jordan
       </p>
            <br>
        <input type="button" class="checkScore" value="Did I make the team?">
    </section>`

    } else {
    return `<section class="quizbox">
    <h1>Miss!</h1>
    <div id="photo">
    <img class ="checkAnsPhoto" src ="${rightWrongPhoto[1]}"</div>
   <br>Wrong Answer!
   <p> "The key to success is failure."
       <br>  - Michael Jordan
   </p>
        <br>
<input type="button" class="nextQuestion" value="Next Question">
</section>`
    }
};


function clickNextQuestion(){
    //know what question user is on
    $('.quizbox').on('click','.nextQuestion', e => {
        questionNum+=1
        
        //renderQuestion()
        $('.quizbox').html(createQuestionHtml());

        console.log('next question')
    })
    //call question page 
};

function checkAnswers(){
   let percentage = (100/(questionNum + 1)) * score;
     let response = ""
      if (percentage < 30){
          response = "Sorry, but you can't make the team with those kind of numbers. Even Jordan got cut from his highschool varsity team. Keep Trying!";
      } if (percentage > 30 && percentage < 44 ){
        response = "Not bad you might do well as a reserve. Jordan was supposed to come off the bench in his final All-star game, but Vince Carter respectfully gave him his spot.";
      } if (percentage > 45 && percentage < 74 ){
        response = "Those are great numbers, Jordan retired with a career 50 FG%. Welcome to team.";
      } if (percentage >=75 ){
        response = "You are a legend. Jordan might give you a shoe contract. Welcome to the team!";
      }
      
      let finalPhoto = ""
      if (percentage < 30){
        finalPhoto = "img/final1.jpg";
      } if (percentage > 30 && percentage < 44 ){
        finalPhoto = "img/final2.jpg";
      } if (percentage > 45 && percentage < 74 ){
        finalPhoto = "img/final3.png";
      } if (percentage >=75 ){
        finalPhoto = "img/final4.jpg";
      }
    return ` 
    <h1>Results</h1>
    <br><div id="photo"><img class="finalPhoto" src="${finalPhoto}"></div>
    <br>
    You got ${score} out of ${STORE.length}! 
    <br> Thats a ${percentage}% Field Goal Percentage.
<p>${response}</p>
<form><input type="submit" class="restart" value="Retake Quiz">`
};

function renderFeedbackScreen(){
    $('.quizbox').on('click','.checkScore', e => {
        $('.quizbox').html(checkAnswers());
    })

    $('.quizbox').submit('click','.restart', e => {
        console.log(submit)
    })
    //get final score from checkAnswers
    //compare it to feedback options
    //generate according option 
    //allow users to restart quiz
   // console.log(percentage)
};

function start() {
    startQuiz()
    renderQuestion()
    createQuestionHtml()
    handleSubmitAnswer()
    clickNextQuestion()
    renderFeedbackScreen()
};

$(start)

