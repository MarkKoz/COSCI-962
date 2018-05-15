$(document).ready(() => {
    /*let imgs = $("img");
    alert(imgs.length);*/

    /*let divs = $("div");
    alert(divs.length);*/

    // $("div").css("background-color", "green");

    /*$("div").each(function() {
        alert($(this).html());
    });*/

    /*let coll = $("div, span");
    alert(coll.length);*/

    // alert($("#test-div").html());
    // alert($("#form1").html());

    // $("BlueDiv").css("border", "2px solid red");
    // $("div.BlueDiv").css("border", "2px solid red");
    // $("span.BlueDiv").css("border", "2px solid red");
    // $(".BlueDiv, .RedDiv").css("border", "2px solid red");
    $("div.BlueDiv, div.RedDiv").css("border", "2px solid red");
});
