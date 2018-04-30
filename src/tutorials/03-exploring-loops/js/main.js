function showStuff(el) {
    var elementID = document.getElementById(el);
    // console.log(elementID);

    for (i = 0; i < elementID.length; ++i) {
        // console.log(elementID[i].text);
        // console.log(elementID[i].value);
        // console.log(elementID[i].selected);

        if (elementID[i].selected === true)
            var x = elementID[i].text;
    }

    return x;
}

function evaluatePage() {
    var feedbackState = showStuff("state");
    var feedbackHome = showStuff("home");

    document.getElementById("output").innerHTML = feedbackState + "<br>" + feedbackHome;
}
