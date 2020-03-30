var scripture1; var book1;  var chapter1;   var verse1;
var scripture2; var book2;  var chapter2;   var verse2;
var scripture3; var book3;  var chapter3;   var verse3;
var x = 0;      var btnNum; var score = 0;  var tries;
var db;

$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, true);
    console.log("onDocumentReady Hit");

    $("#btnHome").click(function () {

        window.location = "main.html";
    });
    $("#preacher").addClass("calmPreacher");
    
});

function onDeviceReady() {
    console.log("onDeviceReady Hit");
    $("#sbubble").hide();
    loadScriptures();
    getSettings();
    initializeGame();
    startGame();
}

//Creates bible DB
function loadScriptures() {
    console.log("Load Scriptures Hit");
    db = window.openDatabase("angryPreacher.sqlite", "1.0", "AngryPreacherDB", 1000000);
    db.transaction(populateDB, populateErrorDB, populateSuccessDB);
}

function loadSettingsForSettingsPage() {

    //Set speed
    $("#slider-2").val(localStorage.speed).slider("refresh");
    //Set sound

    if (localStorage.sound == "1") {
        //  alert("1");
        $("#radio-choice-h-6a").attr("checked", "checked").checkboxradio("refresh");
        $("#radio-choice-h-6b").removeAttr("checked").checkboxradio("refresh");
    }
    else {
        //  alert("0");
        $("#radio-choice-h-6a").removeAttr("checked").checkboxradio("refresh");
        $("#radio-choice-h-6b").attr("checked", "checked").checkboxradio("refresh");
    }

    //Set testament
    switch (localStorage.testament) {

        case "1":
            {
                $("#radio-choice-h-2a").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-h-2b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-h-2c").removeAttr("checked").checkboxradio("refresh");
                break;
            }
        case "2":
            {
                $("#radio-choice-h-2a").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-h-2b").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-h-2c").removeAttr("checked").checkboxradio("refresh");
                break;
            }
        case "3":
            {
                $("#radio-choice-h-2a").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-h-2b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-h-2c").attr("checked", "checked").checkboxradio("refresh");
                break;
            }
    }

    switch (localStorage.bversion) {
        case "1":
            {
                $("#radio-choice-v-6a").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-v-6b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6c").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6d").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6e").removeAttr("checked").checkboxradio("refresh");
                break;
            }
        case "2":
            {
                $("#radio-choice-v-6b").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-v-6a").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6c").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6d").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6e").removeAttr("checked").checkboxradio("refresh");
                break;
            }
        case "3":
            {
                $("#radio-choice-v-6c").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-v-6b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6a").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6d").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6e").removeAttr("checked").checkboxradio("refresh");
                break;
            }

        case "4":
            {
                $("#radio-choice-v-6d").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-v-6b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6c").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6a").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6e").removeAttr("checked").checkboxradio("refresh");
                break;
            }
        case "5":
            {
                $("#radio-choice-v-6e").attr("checked", "checked").checkboxradio("refresh");
                $("#radio-choice-v-6b").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6c").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6d").removeAttr("checked").checkboxradio("refresh");
                $("#radio-choice-v-6a").removeAttr("checked").checkboxradio("refresh");
                break;
            }
    }
}

//Iniatialize Game
function initializeGame() {
    console.log("initialize Game.");
   
    //Set score equal to zero
    $("#score").text("0");
    //Set number of tries to 2
    tries = 2;

    //Set button clicks
    $("#btn1").click(function () {
        if ($("#btn1").attr('Tag') == 'C') {
            $("#sbubble").stop();
            $("#sbubble").remove();
            loopGame(handleResult);
            score += 50;
            $("#score").text(score);
            //alert(score);
        }
        else {
            if (tries != 0)
                tries = tries - 1;
            else {
                window.location = "end.html";
                //game over.
                //preacher picture - preacher saids "study to show thyself approved unto God"
            }
        }

        removeMen();
    });

    $("#btn2").click(function () {
        if ($("#btn2").attr('Tag') == 'C') {
            $("#sbubble").stop();
            $("#sbubble").remove();
            loopGame(handleResult);
            score += 50;
            $("#score").text(score);
        }
        else {
            if (tries != 0)
                tries = tries - 1;
            else {
                window.location = "end.html";
                //game over.
                //preacher picture - preacher saids "study to show thyself approved unto God"
            }
        }

        removeMen();
    });

    $("#btn3").click(function () {
        if ($("#btn3").attr('Tag') == 'C') {
            $("#sbubble").stop();
            $("#sbubble").remove();
            loopGame(handleResult);
            score += 50;
            $("#score").text(score);
            //alert(score);
        }
        else {
            if (tries != 0)
                tries = tries - 1;
            else {
                window.location = "end.html";
                //game over.
                //preacher picture - preacher saids "study to show thyself approved unto God"
            }
        }

        removeMen();
    });
}

function removeMen() {
    console.log("Remove Men Hit");
    switch (tries) {
        case 1:
            $("#men2").hide();
            break;
        case 0:
            $("#men3").hide();
            break;
    }
}

////Gets Settings for the game and stores it into local storage
function getSettings() {
    console.log("Get Settings Hit");
    db.transaction(function (cmd) {

        cmd.executeSql('SELECT * from settings', [], function (cmd, results) {
            localStorage.speed = results.rows.item(0).speed;
            localStorage.sound = results.rows.item(0).sound;
            localStorage.testament = results.rows.item(0).testament;
            localStorage.bversion = results.rows.item(0).bversion;
            console.log("Settings loaded.");
            console.log("Speed = " + localStorage.speed);
        }, null);
    });
}

//Get Scriptures
function getScriptures() {
    console.log("Get Scriptures Hit");
    loopGame(handleResult);
}

var loopGame = function (callback) {
    console.log("starting database query...");

    var wordId1 = Math.floor((Math.random() * 31102) + 1);
    var wordId2 = Math.floor((Math.random() * 31102) + 1);
    var wordId3 = Math.floor((Math.random() * 31102) + 1);

   // $("#preacher").removeClass("angryPreacher").addClass("calmPreacher");

    db.transaction(function (cmd) {

        cmd.executeSql('SELECT word, book, chNum, verseNum from words WHERE wordId = ' + wordId1, [], function (cmd, results) {
            scripture1 = results.rows.item(0).word;
            book1 = results.rows.item(0).book;
            chapter1 = results.rows.item(0).chNum;
            verse1 = results.rows.item(0).verseNum;
            // console.log(book1 + ' ' + chapter1 + ':' + verse1);
            $("#btn1").html('<span class="ui-btn-inner"><span class="ui-btn-text">' + book1 + '<br />' + chapter1 + ':' + verse1 + '</span></span>');
        }, null);


        cmd.executeSql('SELECT word, book, chNum, verseNum from words WHERE wordId = ' + wordId2, [], function (cmd, results) {
            scripture2 = results.rows.item(0).word;
            book2 = results.rows.item(0).book;
            chapter2 = results.rows.item(0).chNum;
            verse2 = results.rows.item(0).verseNum;
            //   console.log(book2 + ' ' + chapter2 + ':' + verse2);
            $("#btn2").html('<span class="ui-btn-inner"><span class="ui-btn-text">' + book2 + '<br />' + chapter2 + ':' + verse2 + '</span></span>');
        }, null);

        cmd.executeSql('SELECT word, book, chNum, verseNum from words WHERE wordId = ' + wordId3, [], function (cmd, results) {
            scripture3 = results.rows.item(0).word;
            book3 = results.rows.item(0).book;
            chapter3 = results.rows.item(0).chNum;
            verse3 = results.rows.item(0).verseNum;
            // console.log(book3 + ' ' + chapter3 + ':' + verse3);
            $("#btn3").html('<span class="ui-btn-inner"><span class="ui-btn-text">' + book3 + '<br />' + chapter3 + ':' + verse3 + '</span></span>');
        }, null);

    }, selectError, selectSuccess);

    function gotResult() {
        var queryResult = "Got Result!";
        //  console.log("query done! result: " + queryResult);
        callback(queryResult);
        
    }
    
  //  setTimeout(gotResult, 3000);
    gotResult();
    
}

function handleResult(result) {
   
        setupScripture();
    animateBubble();
    //   setTimeout(loopGame(handleResult), 50000);
}

//Animates the bubble
function animateBubble() {
    try{
        console.log("Animate Bubble Hit");
        
        //Show floating bubble and moves down
        var animateEnd = 550 - ($("#sbubble").height() + 10);
        if ((scripture1 == undefined) || (scripture2 == undefined) || (scripture3 == undefined)) {
            $("#preacher").removeClass("angryPreacher").addClass("calmPreacher");
            $("#sbubble").hide();
        }
        else
        $("#sbubble").show(1000, function () { setTimeout(function () { $("#preacher").removeClass("angryPreacher").addClass("calmPreacher"); }, 1000); });
        
        $("#sbubble").animate({ marginTop: animateEnd }, (localStorage.speed * 1000), function () {
            console.log("2");
            console.log(localStorage.speed);
            $("#sbubble").stop();
            $("#sbubble").remove();
            loopGame(handleResult);
        });
    }
    catch (err) {
        console.log(err);
    }

}

function setupScripture() {
    console.log("Setup Scripture Hit");
    if ((scripture1 == undefined) || (scripture2 == undefined) || (scripture3 == undefined)) {
        $("#preacher").removeClass("angryPreacher").addClass("calmPreacher");
        $("#sbubble").hide();
    }
    else
        $("#preacher").removeClass("calmPreacher").addClass("angryPreacher");
   
        $('<div id="sbubble"></div>').html('<div class="innerDiv"></div>').prependTo($("#content")); //main div
        console.log("Select Success Hit");
        $("#btn1").removeAttr('Tag');
        $("#btn2").removeAttr('Tag');
        $("#btn3").removeAttr('Tag');

        btnNum = Math.floor((Math.random() * 3) + 1);
        //alert("Random Number: " + btnNum);
        if (btnNum == 1) {
            $("div.innerDiv").text(scripture1);
            $("#btn1").attr('Tag', 'C');

        }
        if (btnNum == 2) {
            $("div.innerDiv").text(scripture2);
            $("#btn2").attr('Tag', 'C');

        }
        if (btnNum == 3) {
            $("div.innerDiv").text(scripture3);
            $("#btn3").attr('Tag', 'C');
        }

        return true;
    

}

// Transaction error callback
//
function selectError(err) {
    alert("Error selecting SQL: " + err.message);
}

// Transaction error callback
//
function populateErrorDB(err) {
    alert("Error populating DB: " + err.message);
}

// Transaction error callback
//
function populateSuccessDB() {
    // alert("Error populating DB: " + err.message);
}

// Transaction success callback
//
function selectSuccess() {
    
}

//Set Settings
function setSettings(name, value) {

    switch (name) {
        case "Sound":
            {
                localStorage.sound = value;
                break;
            }
        case "Speed":
            {
                localStorage.speed = value;
                break;
            }
        case "Testament":
            {
                localStorage.testament = value;
                break;
            }
        case "Bversion":
            {
                localStorage.bversion = value;
                break;
            }
    }

    db.transaction(function (cmd) {
        cmd.executeSql("UPDATE settings SET" +
            " Speed = " + localStorage.speed +
            ",Sound = " + localStorage.sound +
            ",Testament = " + localStorage.testament +
            ",Bversion = " + localStorage.bversion, [], function (cmd, results) {
                //   alert("Settings saved.");
                console.log("Settings saved.");
                console.log("Testament = " + localStorage.testament);
            }, null);
    }, updateError, updateSuccess);
}

// Transaction error callback
//
function updateError(err) {
    alert("Error updating SQL: " + err.message);
}

// Transaction error callback
//
function updateSuccess() {

}

//// Starts the game.
function startGame() {

    getScriptures();
}