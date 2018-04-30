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
