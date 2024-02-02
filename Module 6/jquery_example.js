$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#btn2").click(function(){
        $("#test").hide();
    });
});

$(document).ready(function(){
    $("#btn3").click(function(){
        $("a[target='blank']").hide();
    });
});
//to use a class just replace # with .

$(document).ready(function(){
    $("#btn4").click(function(){
        $("ul li:first-child").hide();
    });
});

$(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("You have pressed p1")
    });
});