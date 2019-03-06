$(".submit").click(function(){
    $(".hide-me").hide();
    var gender=($(".word").val());
    var number=parseInt($(".one").val());
    if(gender==="male"&& number===1){
        $(".message").text("You are Tinky Winky");
        $(".tinkyWinky").show();
    } else if(gender==="female"&& number===1){
        $(".message").text("You are Po");
        $(".po").show();
    }else if (gender==="male" && number===2){
        $(".message").text("You are Dipsy");
        $(".dipsy").show();
    }else if(gender==="female" && number===2){
        $(".message").text("You are Laa-Laa");
        $(".laalaa").show();
    }else{
        $(".message").text("Try Again");
    }
});