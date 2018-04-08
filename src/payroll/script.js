const numFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function getGrossPay(hours, wage) {
    var overtimePay = 0;

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

function calculate() {
    const name = document.getElementById("name").value;
    const hours = document.getElementById("hours").value;
    const wage = document.getElementById("wage").value;
    const taxRate = document.getElementById("tax").value;

    const grossPay = getGrossPay(hours, wage);
    const netPay = getNetPay(grossPay, getTax(grossPay, taxRate));

    alert(`${name}'s net pay is ${numFormat.format(netPay)}.`);
}
