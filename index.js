// Task 1

let title = document.getElementById("title");

let para = document.getElementsByClassName("content");

const list = document.getElementsByTagName("li");

const highlight = document.querySelector(".highlight");

const all = document.querySelectorAll(".highlight");

// Task 2

const a = document.querySelector("#itemList li").parentNode;
console.log(a);

const b = document.querySelector("#itemList, ul").childNodes;
console.log(b);

const c = document.querySelector("#itemlist, ul").children;
console.log(c);

const d = document.querySelector("#itemlist, ul").firstChild
const e = document.querySelector("#itemlist, ul").lastElementChild;
console.log(d, e);

// Task 3

title.style.color = "red";
title.style.fontSize = "30px";

const pgraph = document.createElement("p");
pgraph.innerText = "This is a dramatically added paragraph";
document.getElementById("itemList").appendChild(pgraph);

document.querySelector(".content").textContent = "This paragraph has been updated.";

//document.querySelector(".content").setAttribute("title", "Hover over me!");
// time's up!