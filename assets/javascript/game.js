$(document).ready(function() {
    var runningTotal = 0;
    var guessNum = 0;
    var numb1;
    var numb2;
    var numb3;
    var numb4;
    var score;
    var win= 0;
    var loss = 0;
    $('#numb1').on('click', function(){
        var gem1 = $('#numb1').attr('value');
        runningTotal += parseInt(gem1);
        $('#runningTotal').text(runningTotal);
        //winLose(runningTotal);
    });
    $('#numb2').on('click', function(){
        var gem2 = $('#numb2').attr('value');
        runningTotal += parseInt(gem2);
        $('#runningTotal').text(runningTotal);
        //winLose(runningTotal);
    });
    $('#numb3').on('click', function(){
        var gem3 = $('#numb3').attr('value');
        runningTotal += parseInt(gem3);
        $('#runningTotal').text(runningTotal);
        //winLose(runningTotal);
    });
    $('#numb4').on('click', function(){
        var gem4 = $('#numb4').attr('value');
        runningTotal += parseInt(gem4);
        $('#runningTotal').text(runningTotal);
        //winLose(runningTotal);
    });
    $('#runningTotal').text(runningTotal);
    startGame();
    
});

 function startGame(){
     runningTotal = 0;
     guessNum = Math.floor(Math.random()*101) + 19;
     console.log(guessNum);

     $("#guessNum").text(guessNum);
     $('#guessNum').attr('value',guessNum);

     numb1 = Math.floor(Math.random()*12) + 1;
     $('#numb1').attr('value',numb1);
    
     numb2 = Math.floor(Math.random()*12) + 1;
     $('#numb2').attr('value',numb2);
    
     numb3 = Math.floor(Math.random()*12) + 1;
     $('#numb3').attr('value',numb3);
    
     numb4 = Math.floor(Math.random()*12) + 1;
     $('#numb4').attr('value',numb4); 
 }


    



