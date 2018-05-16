$(document).ready(() => {
    WireEvents();
});

function WireEvents() {
    $("#SubmitButton").click(() => {
        const firstNameVal = $("#FirstNameTextBox").val();
        const lastNameVal = $("#LastNameTextBox").val();

        $("#DivOutput").text(firstNameVal + " " + lastNameVal);
    });

    // Handle selection.
    $(".MyInput").change(function() {
        alert($(this).val());
        $(this).addClass("Highlight");
    });

    /*$("#MyDiv")
        .mouseenter(function() {
            Toggle(this);
            $(this).css("cursor", "pointer");
        })
        .mouseleave(function() {
            Toggle(this);
        })
        .mouseup(function(e) {
            alert($(e.target).attr("id"));
            $(this).text("X: " + e.pageX + " Y: " + e.pageY);
        });

    function Toggle(div) {
        $(div).toggleClass("Highlight");
    }*/

    $("#MyDiv").on("mouseenter mouseleave mouseup", function(e) {
        $(this).toggleClass("Highlight");
        $(this).css("cursor", "pointer");

        if (e.type === "mouseup")
            $(this).text("X: " + e.pageX + " Y: " + e.pageY);
    });

    // Using hover()
    /*$("#MyTable tr").hover(
        function() {
            // mousenter
            $(this).css("background-color", "#efefef");
        },
        function() {
            // mouseleave
            $(this).css("background-color", "white");
        });*/

    $("#MyTable tr").hover(function() {
        $(this).toggleClass("LightHighlight");
    });

    // Using toggle() - doesn't work in later versions?
}
