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

function showMore() {
    var elementID = document.getElementsByName("bulb");
    // console.log(elementID.length);
    var mycheck = "";

    for (i = 0; i < elementID.length; ++i) {
        // console.log(elementID[i].checked);
        // console.log(elementID[i].value);

        if (elementID[i].checked === true)
            mycheck += elementID[i].value + "<br>";
    }

    return mycheck;
}

function evaluatePage() {
    var feedbackState = showStuff("state");
    var feedbackHome = showStuff("home");
    var feedbackLight = showMore();

    document.getElementById("output").innerHTML = feedbackState + "<br>" + feedbackHome + "<br>" + feedbackLight;
}
