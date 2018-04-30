"use strict";

function addMonths(elem) {
    var annualUseKw = 0;
    var months = document.getElementById(elem).getElementsByTagName("input");

    for (let i = 0; i < months.length; ++i) {
        annualUseKw += Number(months[i].value);
    }

    return annualUseKw / 365;
}

function sunHours() {
    var theZone = document.forms.solarForm.zone.selectedIndex + 1;

    switch (theZone) {
        case 1:
            return 6;
        case 2:
            return 5.5;
        case 3:
            return 5;
        case 4:
            return 4.5;
        case 5:
            return 4.2;
        case 6:
            return 3.5;
        default:
            return 0;
    }
}

function calculateSolar() {
    var dailyUseKw = addMonths("mpc");
    console.log(dailyUseKw);

    var sunHoursPerDay = sunHours();
    console.log(sunHoursPerDay);

    var minKwNeeds = dailyUseKw / sunHoursPerDay;
    console.log(minKwNeeds);

    var realKwNeeds = minKwNeeds * 1.25;
    console.log(realKwNeeds);

    var realWattNeeds = realKwNeeds * 1000;
    console.log(realWattNeeds);
}
