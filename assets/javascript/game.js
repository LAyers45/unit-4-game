$(document).ready(function () {
    var winNumber = 0;
    var loseNumber = 0;
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
        totalNumber = Math.floor(Math.random() * 120) + 19;
        //console.log(totalNumber);
        userNumber = 0;
        diamond = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        $(".totalNumber").html(totalNumber);
        $(".userNumber").html(userNumber);
    }

    $(".diamond").on("click", function () {
        userNumber = userNumber + diamond;
        $(".userNumber").html(userNumber);
        winLose();
        //console.log(diamond);
        //console.log(emerald);
        //console.log(ruby);
        //console.log(sapphire);
    });
    $(".emerald").on("click", function () {
        userNumber = userNumber + emerald;
        $(".userNumber").html(userNumber);
        winLose();
    });
    $(".ruby").on("click", function () {
        userNumber = userNumber + ruby;
        $(".userNumber").html(userNumber);
        winLose();
    });
    $(".sapphire").on("click", function () {
        userNumber = userNumber + sapphire;
        $(".userNumber").html(userNumber);
        winLose();
    });


    function winLose() {
        if (userNumber === totalNumber) {
            winNumber++;
            $(".winNumber").html("Wins: " + winNumber);
            initializeGame();
        }

        else if (userNumber > totalNumber) {
            loseNumber++;
            $(".loseNumber").html("losses: " + loseNumber);
            initializeGame();
        }
    }

    initializeGame();
});