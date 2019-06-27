$(document).ready(function () {
    var winNumber = 0;
    var loseNumber = 0;
    var userNumber = 0;
    var totalNumber = Math.floor(Math.random() * 120) + 19;
    //console.log(totalNumber);
    var userNumber = 0;
    var diamond = Math.floor(Math.random() * 12) + 1;
    var emerald = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    //console.log(diamond, emerald, ruby, sapphire);
    //add to html
    $(".totalNumber").html(totalNumber);
    $(".winNumber").html("Wins: " + winNumber);
    $(".loseNumber").html("Losses: " + loseNumber);
    function initializeGame() {

    }

    $(".diamond").on("click", function () {
        userNumber = userNumber + diamond;
        $(".userNumber").html(userNumber);
    });
    $(".emerald").on("click", function () {
        userNumber = userNumber + emerald;
        $(".userNumber").html(userNumber);
    });
    $(".ruby").on("click", function () {
        userNumber = userNumber + ruby;
        $(".userNumber").html(userNumber);
    });
    $(".sapphire").on("click", function () {
        userNumber = userNumber + sapphire;
        $(".userNumber").html(userNumber);
    });


    initializeGame();
});