$(document).ready(() => {
    const divs = $("div.BlueDiv, div.RedDiv");
    let html = "";

    // Iterating nodes.
    divs.each((i, e) => {
        html+= "<br/>" + i + $(e).text();
    });

    $("#OutputDiv").html(html);

    // Modifying properties and attributes.
    divs.each((i, e) => {
        e.title = "Some title"; // Raw DOM object.
        $(e).attr("title", "Some title 2");
    });

    // divs.css("font-size", "20pt");

    /*divs.attr({
        title: "Some title 3",
        style: "font-size: 14pt; background-color: yellow; color: black;"
    });*/

    divs
        .attr({
            title: "Some title 3"
        })
        .css("background-color", "yellow")
        .css("font-size", "14pt")
        .css("color", "black");
});
