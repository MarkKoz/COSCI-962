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
}
