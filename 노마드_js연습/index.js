let n =100;
console.log(n);

const week = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(week[1]);

var obj = {
    name: "HOO",
    age: 15,
    movies: ["TENET", "The Evangelion"],
    // foods: [{name: galaxy, company: samsung}, {name: iPhone, company: apple}]
}
console.log(obj.movies);

const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi!";
title.style.color = "red";
console.dir(document);
document.title="help";

window.addEventListener("resize");