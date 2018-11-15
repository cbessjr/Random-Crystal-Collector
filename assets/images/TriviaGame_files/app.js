// Array of objects to store the questions and answers
//Each question is an object containing the correct answer
//reference for the array: 


var quesAnsw =    [ {

    Question: "What color is the sky?",
    Selection: ["red", "green", "blue"],
    Answer: 2
},

{
    Question: "How many months in a year?",
    Selection: ["twelve", "fifteen", "ten"],
    Answer: 0
},

{
    Question: "Who makes the Playstation 4?",
    Selection: ["Microsoft", "Sony", "Nintendo"],
    Answer: 1

}];


 quesAnsw.forEach(function (elem, index){


    var question = $(`
    
    <div>
        <p>${elem.Question}</p>
    </div>
    
    <div>
        <input id = "ques-${index+1}-ans-one" type="radio" name="${index+1}" value="${elem.Selection[0].toLowerCase()}"> ${elem.Selection[0]}
        <input id = "ques-${index+1}-ans-two" type="radio" name="${index+1}" value="${elem.Selection[1].toLowerCase()}"> ${elem.Selection[1]}
        <input id = "ques-${index+1}-ans-three" type="radio" name="${index+1}" value="${elem.Selection[2].toLowerCase()}"> ${elem.Selection[2]}
    </div>

    
    `)



     console.log(elem);
    $("#questions-form").append(question);



 })

// document.getElementById("test").innerHTML = quesAnsw[0];


//_________________________________________________________________________________________________


//Functions Functions Functions....
//Start Function, use .html method

// function Start {

//     $("#start-game").html()


// }


//Use the form tag
//Look up radio input

// if(document.getElementById('gender_Male').checked) {
//     //Male radio button is checked
//   }else if(document.getElementById('gender_Female').checked) {
//     //Female radio button is checked
//   }


//_________________________________________________________________________________________________

//Function set the timer at 15 seconds
//Worry about updating the div after the timer works
//Timer for the form. Reference simpleRTimer (Timers, activity 8)

//Additional timer references: 
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout2
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2





var timeLeft = 10;
var secDisplay = $("#seconds-left")

secDisplay.text(timeLeft);

setInterval(tick, 1000 * 1);

//  Step 3:
//  Fill in the blanks to these functions.
function tick() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  secDisplay.text(timeLeft);
  console.log("10 seconds left");

  if (timeLeft > 0) {

    timeLeft--;

  } 

}




//_________________________________________________________________________________________________

// //Function to evaluate the correct answers for the user

function questionCheck() {

var totalAnsCorrect = 0;
var totalAnsIncorrect = 0


if (document.getElementById("ques-one-ans-three").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

if (document.getElementById("ques-two-ans-one").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

if (document.getElementById("ques-three-ans-two").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

    return totalAnsCorrect
    return totalAnsIncorrect

}


function correctAns() {

    var correctAns = 0; 
    correctAns++;

    return correctAns;

}

function incorrectAns() {

    var incorrectAns = 0;
    incorrectAns++;

    return incorrectAns;

}

//Google the evaluation of the checked radio buttons
//.HTML to show the total correct and incorrect screen



//Bonus, restart button

