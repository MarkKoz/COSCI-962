function getHours() {
    // Converted to array so that reduce() can be used.
    const inputs = Array.from($("#wts input"));

    // Sums all the values of the inputs. Initial value of 0 so it starts at
    // 0th index instead of 1st. If the value can't be parsed (e.g. when input
    // is empty), adds 0 instead, effectively ignoring it.
    return inputs.reduce((acc, val) => acc + (parseInt(val.value) || 0), 0);
}

function getTaxRate() {
    const select = $("form[name='payrollForm'] select[name='panel']");

    return parseInt(select.val()) / 100;
}

function getGrossPay(hours, wage) {
    let overtimePay = 0;

    if (hours > 40) {
        overtimePay = getOvertimePay(hours - 40, wage);
        hours = 40;
    }

    return hours * wage + overtimePay;
}

function getOvertimePay(hours, wage) {
    return hours * wage * 1.5;
}

function getTax(grossPay, taxRate) {
    return grossPay * taxRate;
}

function getNetPay(grossPay, tax) {
    return grossPay - tax;
}

function calculateSolar() {
    const hours = getHours();
    const gross = getGrossPay(hours, 12.50);
    const tax = getTax(gross, getTaxRate());
    const netPay = getNetPay(gross, tax);

    $("#feedback").html(
`<p>
    Name: John Doe<br>
    Total hours: ${hours}<br>
    Tax: ${tax}<br>
    Net pay: ${netPay}
</p>`);
}

$(document).ready(() => {
    $("button").click(calculateSolar);
});
