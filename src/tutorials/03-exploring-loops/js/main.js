function showStuff(el) {
    var elementID = document.getElementById(el);
    console.log(elementID);

    for (i = 0; i < elementID.length; ++i) {
        console.log(elementID[i].text);
        console.log(elementID[i].value);
        console.log(elementID[i].selected);
    }
}

function evaluatePage() {
    showStuff("state");
    showStuff("home");
}
