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

function calculatePanel() {
    var userChoice = document.forms.solarForm.panel.selectedIndex;
    var panelOptions = document.forms.solarForm.panel.options;
    var power = panelOptions[userChoice].value;
    var name = panelOptions[userChoice].text;

    return [power, name];
}

function calculateSolar() {
    var dailyUseKw = addMonths("mpc");
    // console.log(dailyUseKw);

    var sunHoursPerDay = sunHours();
    // console.log(sunHoursPerDay);

    var minKwNeeds = dailyUseKw / sunHoursPerDay;
    // console.log(minKwNeeds);

    var realKwNeeds = minKwNeeds * 1.25;
    // console.log(realKwNeeds);

    var realWattNeeds = realKwNeeds * 1000;
    // console.log(realWattNeeds);

    var panelInfo = calculatePanel();
    var panelOutput = panelInfo[0];
    var panelName = panelInfo[1];
    // console.log(panelOutput);
    // console.log(panelName);

    var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
    // console.log(panelsNeeded);

    document.getElementById("feedback").innerHTML =
`<p>
    Based on your average daily use of ${Math.round(dailyUseKw)} kWh, you will
    need to purchase ${panelsNeeded} ${panelName} solar panels to offset 100%
    of your electricity bill.
</p>
<h2>Additional Details</h2>
<p>Your average daily electricity consumption: ${Math.round(dailyUseKw)} kWh per day.</p>
<p>Average sunshine hours per day: ${sunHoursPerDay} hours</p>
<p>Realistic watts needed per hour ${Math.round(realWattNeeds)} watts/hours</p>
<p>The ${panelName} panel you selected generates about ${panelOutput} watts per hours.</p>`;
}
