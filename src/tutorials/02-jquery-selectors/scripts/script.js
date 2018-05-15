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
    // $("div.BlueDiv, div.RedDiv").css("border", "2px solid red");

    // alert($("div[title]").length);

    /*let divs = $("div[title='Div Title']");
    alert(divs.length);*/

    /*let inputs = $("input[type='text']");
    // alert(inputs.length);
    inputs.css("background-color", "yellow");*/

    /*let inputs = $(":input");
    // alert(typeof inputs[0]);
    alert($(inputs[0]).val());*/

    /*// $(":input").each(function() {
    $("#form1 :input").each(function() {
       let elem = $(this);
       alert(elem.val());
    });*/

    // alert($("div:contains('my div')").html());

    // $("tr").css("background-color", "green");
    // $("tr:odd").css("background-color", "yellow");
    // $("tr:even").css("background-color", "yellow");
    // $("tr:first-child").css("background-color", "yellow");
    // $("#DataTable tr:odd").css("background-color", "green");

    // alert($("div[title$='Title']").html());
    // alert($("div[title^='Title']").html());
    // alert($("div[title*='Title']").html());

    $("div[title*='Title']").html("Updated div value due to title.");
});
