// Task 1
//A
let title = document.getElementById("title");

//B
let para = document.getElementsByClassName("content");

//C
const list = document.getElementsByTagName("li");

//D
const highlight = document.querySelector(".highlight");

//E
const all = document.querySelectorAll(".highlight");

// Task 2
//A
const a = document.querySelector("#itemList li").parentNode;
console.log(a);

//B
const b = document.querySelector("#itemList, ul").childNodes;
console.log(b);

//C
const c = document.querySelector("#itemlist, ul").children;
console.log(c);

//D
const d = document.querySelector("#itemlist, ul").firstChild
const e = document.querySelector("#itemlist, ul").lastElementChild;
console.log(d, e);

// Task 3
//A
title.style.color = "red";
title.style.fontSize = "30px";

//B
const pgraph = document.createElement("p");
pgraph.innerText = "This is a dramatically added paragraph";
document.getElementById("itemList").appendChild(pgraph);

//C
document.querySelector(".content").textContent = "This paragraph has been updated.";

//D
let secondPara = document.querySelectorAll("p.content");
secondPara[1].setAttribute("title", "Hover over me!");

//E
let uL = document.getElementById("itemList");
uL.classList.add("styled-list");

let uLi = document.querySelectorAll("li");
uLi[1].classList.remove("list-item");

//F
let date = document.querySelectorAll("li");
date[3].remove();