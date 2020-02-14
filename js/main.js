"use strict";


const STORE = [
    {
       question: "Where was Michael Jordan born?" ,
       answers:[ "Chicago, Illinois",
                 "Charlotte, North Carolina",
                 "Brooklyn, New York",
                 "Philadelphia, Pennsylvania"],
       correct:  "Brooklyn, New York",
       sentence: "Brooklyn, New York.",
       photo: ["img/mikekid.jpg" , "Michael Jordan as a child."]
    },
    {
        question: "How long did MJ stay in college before entering the Nba Draft?",
        answers:[ "All Four years.",
                  "After his junior season.",
                  "After his sophmore season.",
                  "One and done."],
        correct:  "After his junior season.",
        sentence: "after his junior season.",
        photo: ["img/mikeunc.jpg","Michael Jordan playing for the Univesity of North Carolina."]
     },
     {
        question: "Which of the following teams did MJ play for?" ,
        answers:[ "Washington Wizards",
                  "Birmingham Barons",
                  "Scottsdale Scorpions",
                  "All of the above."],
        correct:  "All of the above.",
        sentence:  "all of the above.",
        photo: ["img/mikegolf.jpeg","Michael Jordan playing golf."]
     },
     {
        question: "Of MJs six NBA championship wins, how many times did he also win the Finals MVP award?" ,
        answers:[ "Six times",
                  "Once",
                  "Never",
                  "Four times"],
        correct:  "Six times",
        sentence: "six times.",
        photo: ["img/mike6rings.jpg","Portrait of Michael Jordan displaying six championship rings."]
     },
     {
        question: "Every few years there is a passing of the torch of sorts for the best player in the NBA. Which set of players came before & after MJ?" ,
        answers:[ "Julius Erving & Giannis Antetokounmpo",
                  "Larry Bird & Allen Iverson",
                  "Grant Hill & Lebron James",
                  "Magic Johnson & Kobe Bryant"],
        correct:  "Magic Johnson & Kobe Bryant",
        sentence: "Magic Johnson & Kobe Bryant.",
        photo: ["img/mikedreamteam.jpg","Michael Jordan with Larry Bird & Magic Johnson in a photo for USA Basketball."]
     },
     {
         question: "After returning from his stint as baseball player, what alternate number did Mj wear in the 1994-1995 season?",
         answers:[ "#11",
                   "#12",
                   "#45",
                   "#3"],
         correct:  "#45",
         sentence: "#45, the same number he wore in baseball.",
         photo: ["img/mike45.jpg","Michael Jordan resting during a game."]
     },
     {
        question: "In the movie Space Jam, Bill Murray served as a replacement for the only other human teammate on MJ's team. Who was that actor?",
        answers:[ "Charles Barkley",
                  "Wayne Knight (Newman from Seinfield)",
                  "Dustin Neil Diamond (Screech from Saved by the Bell)",
                  "Larry Bird"],
        correct:  "Wayne Knight (Newman from Seinfield)",
        sentence: "Newman!",
        photo: ["img/mikemurray.jpg","Michael Jordan and Bill Murray in a scene from the movie Space Jam."]
    },
    {
        question: "Despite being 6'6 MJ wears a pretty common shoe size. What is it?",
        answers:[ "Size 13",
                  "Size 10.5",
                  "Size 9",
                  "Size 15"],
        correct:  "Size 13",
        sentence: "size 13, the same as me if you're feeling generous.",
        photo: ["img/mikeshoe.jpg","Michael Jordan wearing his signature shoes."]
    },
    {
        question: "Michael Jordan popularized the free throw line dunk in a 1987 Dunk contest. Which player and mentor of his performed it first?",
        answers:[ "Clyde Drexler",
                  "Dominique Wilkins",
                  "Spud Webb",
                  "Julius Erving"],
        correct:  "Julius Erving",
        sentence: "Julius Erving, aka Doctor J.",
        photo: ["img/mikedrj.jpg","Michael Jordan and Julius Erving."]
    },
    {
        question: "The NBA is known for its bitter rivalries. What legendary player and Chicago native was known as MJ's arch nemesis?",
        answers:[ "Hakeem Olajuwon",
                  "Scottie Pippen",
                  "Isaiah Thomas",
                  "Drazen Petrovic"],
        correct:  "Isaiah Thomas",
        sentence: "Isaiah Thomas of the Bad Boy Pistons.",
        photo: ["img/mikerival.png","Isaiah Thomas with Michael Jordan in the background."]
    }
]; 

const rightWrongPhoto = ["img/mikehappy.jpg","img/mikecrying.jpg"];

///START QUIZ

function startQuiz() {
  $('.quizbox').on('click','.quiz-start', e => {
   renderQuestion();
   });
};




let questionNum = 0; 
let score = 0; 

function renderQuestion(){
    $('.quizbox').on('click','.quiz-start', e => {
      $('.quizbox').html(createQuestionHtml());
       });
};

function createQuestionHtml(){
    return `<section class="quizbox">
        <div class="counter"> ${questionNum + 1} of ${STORE.length}
         <br>${score} made, ${questionNum  - score} missed</div>
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
  $('.quizbox').on('click',".submit", e => { 
    let answer = $("input:checked");
     
    if ($("input:checked").length < 1){
        alert('"I can accept failure, everyone fails at something. But I can\'t accept not trying."' + " - Michael Jordan")
    } else if (answer.hasClass(`${STORE[questionNum].correct}`) === true){
        $('.quizbox').html(rightHtml());
    } else {
        $('.quizbox').html(wrongHtml());
    }
    clickNextQuestion();
    
  })
  
};

function rightHtml(){
    
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
    
    if(questionNum + 1 === STORE.length){
        return `<section class="quizbox">
        <h1>Miss!</h1>
        <div id="photo">
        <img class ="checkAnsPhoto" src ="${rightWrongPhoto[1]}"</div>
       <br>Wrong Answer!
       <br> It was ${STORE[questionNum].sentence}
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
   <br> It was ${STORE[questionNum].sentence}
   <p> "The key to success is failure."
       <br>  - Michael Jordan
   </p>
        <br>
<input type="button" class="nextQuestion" value="Next Question">
</section>`
    }
};


function clickNextQuestion(){
    
    $('.quizbox').on('click','.nextQuestion', e => {
        questionNum+=1
        $('.quizbox').html(createQuestionHtml());
        
    })
    
};

function checkAnswers(){
   let percentage = (100/(questionNum + 1)) * score;
     let response = ""
      if (percentage <= 30){
          response = "Sorry, but you can't make the team with those kinds of numbers. Even Jordan got cut from his highschool varsity team. Keep Trying!";
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
        
    })
    
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

