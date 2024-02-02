$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text:" + $("#test").text());
    });
});

$(document).ready(function(){
    $("#btn2").click(function(){
        alert("HTML:" + $("#test").html);
    });
});
