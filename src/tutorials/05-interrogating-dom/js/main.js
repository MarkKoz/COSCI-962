var foundYou = document.getElementById("overview");
console.log(foundYou);
console.log(foundYou.innerHTML);
foundYou.innerHTML = ">>I Changed You<<";

foundYou = document.getElementsByTagName("p");
console.log(foundYou);
console.log(foundYou[1].innerHTML);
foundYou[1].innerHTML = "..I Changed You<<";

foundYou = document.getElementsByName("description");
console.log(foundYou);
console.log(foundYou[0].innerHTML);
foundYou[0].innerHTML = ">>I Changed You<<";

foundYou = document.getElementsByClassName("smallCenter");
console.log(foundYou[0].innerText);
foundYou[0].innerText = "<<New Paragraph Info<<";

foundYou = document.querySelectorAll("ul#lp_list li");
console.log(foundYou[0].innerText);
console.log("LENGTH OF COLLECTION >> " + foundYou.length);
foundYou[2].innerText = "<<I Changed You>>";

foundYou = document.getElementById("sw_list");
console.log(foundYou);
var childArray = foundYou.getElementsByTagName("li");
console.log(childArray);
childArray[0].innerText = ">>These Items";
childArray[1].innerText = ">>Have Just";
childArray[2].innerText = ">>Been Changed";
