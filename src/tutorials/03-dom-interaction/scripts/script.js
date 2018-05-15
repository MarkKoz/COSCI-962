$(document).ready(() => {
    let html = "";

    $("div.BlueDiv, div.RedDiv").each((i, e) => {
        html+= "<br/>" + i + $(e).text();
    });

    const output = $("#OutputDiv");
    output.html(html);
});
