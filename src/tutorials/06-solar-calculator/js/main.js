"use strict";

function addMonths(elem) {
    var annualUseKw = 0;
    var months = document.getElementById(elem).getElementsByTagName("input");

    for (let i = 0; i < months.length; ++i) {
        annualUseKw += Number(months[i].value);
    }

    return annualUseKw / 365;
}

var dailyUseKw = addMonths("mpc");
console.log(dailyUseKw);
