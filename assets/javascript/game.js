// Global Variables
//-------------------------------------
var winNumber = 0;
var loseNumber = 0;
var userNumber = 0;
var totalNumber = Math.floor(Math.random() * 120) + 19;;
// variable for crystal values
var diamond = 0;
var emerald = 0;
var ruby = 0;
var sapphire = 0;
//set wins and loses
$(".winNumber").html("Wins: " + winNumber);
$(".loseNumber").html("Losses: " + loseNumber);

function reset() {
    totalNumber = Math.floor(Math.random() * 120) + 19;
    //console.log(totalNumber);
    userNumber = 0;
    diamond = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    //console.log(diamond, emerald, ruby, sapphire);
    //add to html
    $(".totalNumber").html(totalNumber);
}

function startGame() {

    reset();
}
startGame();