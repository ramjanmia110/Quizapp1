let button3 =document.querySelector('#button3 button');
let quiz_rule =document.querySelector("#quiz_rule");
let exitBtn =document.querySelector('#buttons .btn1');
let continueBtn =document.querySelector("#buttons .btn2");
let questions =document.querySelector("#question_group");
let timeQuestion =document.querySelector(".time .second");
let lineQuestion =document.querySelector('#question_group .time_line');
let RePlayButton =document.querySelector('.btn01');
let exitButton =document.querySelector('.btn02');




exitButton.onclick = () => {
    score = 0;
    userScore = 0;
    showQuestion(0);
    timeShow(30);
    showLineTime(0);
    quiz_rule.classList.remove('questioninfo');
    finalResult.classList.remove('resultActive');
}

RePlayButton.onclick =()=>{
    window.location.reload();
}





button3.onclick =()=>{
  let t =quiz_rule.classList.add('questioninfo');
 
}

exitBtn.onclick =()=>{
    let t =quiz_rule.classList.remove('questioninfo');
}

continueBtn.onclick =()=>{
    quiz_rule.classList.remove('questioninfo');
    continueBtn.classList.add('questionsinfo1');
    
}

continueBtn.onclick =()=>{
    quiz_rule.classList.remove('questioninfo');
    questions.classList.add("allQuestion")
    showQuestion(0);
    timeShow(30);
    showLineTime(0)
}


let nextBtton1 =document.querySelector('.next_btn');
let score =0;
let counter ;
let timeCountinue =30;
let lineTime ;
let lineContinue =0;
let userScore =0;

let finalResult =document.querySelector('.finalResult');
let button001 =document.querySelector('.buttons00 .btn01');
let button002 =document.querySelector('.buttons00 .btn02');

nextBtton1.onclick =()=>{
   if(score < totalQuestion.length-1){
        score++;
        showQuestion(score);
        clearInterval(counter);
        timeShow(timeCountinue);

        clearInterval(lineTime);
        showLineTime(lineContinue);
        nextBtton1.style.display ="none"

   }else{
    resultShow()
   }
}



function showQuestion(index){
    let queText11 =document.querySelector(".text1");
    let questionOption1 =document.querySelector(".questions_options");
    let quetionTotal12 =document.querySelector('#total_question');
    let queText11Tag ="<span>"+ totalQuestion[index].number + "." + totalQuestion[index].question  +"</span>";
    queText11.innerHTML =queText11Tag;

    let questionOption1Tag ='<div class="options">' + totalQuestion[index]. options[0] + "</div>"
                            + '<div class="options">' + totalQuestion[index]. options[1] + "</div>"
                            + '<div class="options">' + totalQuestion[index]. options[2] + "</div>"
                            + '<div class="options">' + totalQuestion[index]. options[3] + "</div>"


    questionOption1.innerHTML =questionOption1Tag;

    let quetionTotal12Tag ="<span>" + totalQuestion[index].number +"Of  10 </span>";

    quetionTotal12.innerHTML =quetionTotal12Tag;
    

    let options110 =questionOption1.querySelectorAll(".options");
    

    for(let i=0; i<options110.length; i++){
       options110[i].setAttribute('onclick','selectedQuestion(this)')
        
    }
}

let tick_icon ='  <div class="tik"><i class="fa-solid fa-check"></i></div>';
let cross_icon =' <div class="cross"><i class="fa-solid fa-xmark"></i></div>';

function selectedQuestion(answer){
    clearInterval(counter);
    clearInterval(lineTime)
    let questionStart10 =answer.textContent;
    let rightQuestion =totalQuestion[score].answer;
    let quetionTotal120 =document.querySelector(".questions_options");
    let allOptions =quetionTotal120.children.length;
    
    

    if(questionStart10 ==rightQuestion){
        userScore +=1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML('beforeend', tick_icon);
        
        
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML('beforeend', cross_icon);

        for(let i=0; i<allOptions; i++){
            if( quetionTotal120.children[i].textContent ===rightQuestion){
                quetionTotal120.children[i].setAttribute('class','options correct');
                quetionTotal120.children[i].insertAdjacentHTML('beforeend', tick_icon);
            }
        }

    }

    for(let i=0; i<allOptions; i++){
        
        quetionTotal120.children[i].classList.add('disabled')
    }

    nextBtton1.style.display ="block"
}


function resultShow(){
    quiz_rule.classList.remove('questioninfo');
    continueBtn.classList.remove('questionsinfo1');
    finalResult.classList.add('resultActive');
    let resultScore1 =document.querySelector('.resultScore');
    
    
   
    let resultScorTag;
    
    if (userScore > 9) {
        resultScorTag = `
        <span class="congra0">&#128521; Congratulations! You Pass This Exam</span>
        <span >You Got <p class="point_1">${userScore}</p> Out Of <p class="point_2">${totalQuestion.length}</p></span>`;
    }else if(userScore > 5){
        resultScorTag = `
        <span class="congra1">&#128542;Carry on ...</span>
        <span >You Got <p class="point_1">${userScore}</p> Out Of <p class="point_2">${totalQuestion.length}</p></span>`;
    }else{
        resultScorTag = `
        <span class="congra2">&#128557;Sorry!You Fail.You Can Not Pass This Exam </span>
        <span >You Got <p class="point_1">${userScore}</p> Out Of <p class="point_2">${totalQuestion.length}</p></span>`;
    }

    resultScore1.innerHTML = resultScorTag;
    

   
    
}


function timeShow(time){
    counter =setInterval(timer,1000);
    
    

    function timer(){
        timeQuestion.textContent =time;
        time--;
        if(time < 9){
            let outTime =timeQuestion.textContent;
            timeQuestion.textContent =0 + outTime;
        }

        if(time <0){
            clearInterval(counter)
            timeQuestion.textContent ='00'

            let questionOption1 =document.querySelector(".questions_options");
            let options110 =questionOption1.querySelectorAll(".options");

            for(let i=0; i<options110.length; i++){
                options110[i].classList.add('disabled');
            }

            nextBtton1.style.display ="block"
        }
    }
}



function showLineTime(time){
    lineTime =setInterval(timer,64);
    
    function timer(){
        time +=1;
        lineQuestion.style.width =time + "px";

        if(time > 410){
            clearInterval(lineTime)
        }

    }
}








