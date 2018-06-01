$(document).ready(() => {
    $("form").submit(false);
    const balance = $(".balance");

    // Hides feedback message when the input changes.
    $("form input").on("input", function() {
        $(this).closest("fieldset").find(".feedback").hide();
    });

    $("#deposit button").click(() => {
        const target = $("#deposit");
        const input = parseFloat(target.find("input").val());

        balance.html((parseFloat(balance.html()) + input).toFixed(2));
        setFeedback(target.find(".feedback"), `Successfully deposited $${input}.`);
    });

    $("#withdraw button").click(() => {
        const target = $("#withdraw");
        const balFloat = parseFloat(balance.html());
        const input = parseFloat(target.find("input").val());

        if (input > balFloat) {
            setFeedback(target.find(".feedback"), `Withdrawal failed. A withdrawal of $${input} would result in the account being overdrawn.`, true);
        } else {
            balance.html((balFloat - input).toFixed(2));
            setFeedback(target.find(".feedback"), `Successfully withdrew $${input}.`);
        }
    });
});

function setFeedback(e, msg, isError) {
   if (isError) {
       e.removeClass("success");
       e.addClass("error");
   } else {
       e.addClass("success");
       e.removeClass("error");
   }

    e.html(msg);
    e.show();
}
