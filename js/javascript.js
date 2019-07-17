var question1 = "This is the question 1 message.";
var question2 = "This is the question 2 message.";
var question3 = "This is the question 3 message.";

var questions = [question1, question2, question3];


/*window.onload = helloWorld();
function helloWorld(){
	$("#js_hello").append("<p>Hello from javascript land!</p>");
}
*/

window.onload = initGame();

function initGame(){
	initQuestions();
}

function initQuestions()
{	
	for (var i = 0; i < questions.length; i++)
		initQuestion(i);
}

function initQuestion(num){
	$("#question"+num).append(questions[num]);
}