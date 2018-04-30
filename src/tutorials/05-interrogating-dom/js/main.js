console.log("01 - Element by Id");
var foundYou = document.getElementById("overview");
console.log(foundYou);
console.log(foundYou.innerHTML);
foundYou.innerHTML = ">>I Changed You<<";

//02 - Element by Tag Name
console.log("\n02 - Element by Tag Name");
foundYou = document.getElementsByTagName("p");
console.log(foundYou);
console.log(foundYou[1].innerHTML);
foundYou[1].innerHTML = "..I Changed You<<";

// 03 - Element by Name
console.log("\n03 - Element by Name");
foundYou = document.getElementsByName("description");
console.log(foundYou);
console.log(foundYou[0].innerHTML);
foundYou[0].innerHTML = ">>I Changed You<<";

// 04 - Element by Class Name
console.log("\n04 - Element by Class Name");
foundYou = document.getElementsByClassName("smallCenter");
console.log(foundYou[0].innerText);
foundYou[0].innerText = "<<New Paragraph Info<<";

// 05 - Query Selector All
console.log("\n05 - Query Selector All");
foundYou = document.querySelectorAll("ul#lp_list li");
console.log(foundYou[0].innerText);
console.log("LENGTH OF COLLECTION >> " + foundYou.length);
foundYou[2].innerText = "<<I Changed You>>";

// 06 - Combination 1
console.log("\n06 - Combination 1");
foundYou = document.getElementById("sw_list");
console.log(foundYou);
var childArray = foundYou.getElementsByTagName("li");
console.log(childArray);
childArray[0].innerText = ">>These Items";
childArray[1].innerText = ">>Have Just";
childArray[2].innerText = ">>Been Changed";

// 07 - Combination 2
console.log("\n07 - Combination 2");


// 08 - Combination 3
console.log("\n08 - Combination 3");
