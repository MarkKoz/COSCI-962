$(document).ready(() => {
    const tbody = $("#customers tbody");

    $("#addRow").on("click", () => tbody.append("<tr><td>Jane</td><td>Doe</td></tr>"));

    tbody.on("click", "td", function() {
        alert($(this).text());
    });
});
