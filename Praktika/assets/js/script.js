"use strict";

// let data = { id: 1, name: "test" };

// data.surname = "salam";

// console.log(data);

// let name = "Ilham";

// let result = [...name];

// let nums1 = [1, 2, 3, 4, 5];

// let nums2 = [6, 7, 8, 9];

// let result = [...nums1, ...nums2];

// console.log(result);

// function showNums(...numbers) {
//   console.log(numbers.length);
// }

// function test() {
//   console.log(arguments);
// }

// test(1, 2, 3, 4, 5);

// showNums(1, 2, 3, 4, 5);

//let elems = document.getElementsByClassName("h1");

// let elems = document.getElementsByClassName("test");

// for (const item of elems) {
//   console.log(item);
// }

// let elems = document.getElementById("salam");

// console.log(elems);

// let elems = document.querySelectorAll("h1");

// for (const item of elems) {
//   console.log(item);
// }

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// let elem = document.querySelector(".text");

// elem.innerText = "salamlar";

// elem.innerText = "<h1>salamlar</h1>";

// elem.style.color = "red";

// elem.style.backgroundColor = "black";

// elem.style.padding = "50px";

//elem.className = "salam";

// elem.classList.add("salam");

// elem.classList.remove("test2");

// if (elem.classList.contains("test2")) {
//   elem.classList.remove("test2");
// }

// let btn = document.querySelector(".add");

// btn.onclick = function () {
//   alert("salamlar");
// };

// btn.onclick = function () {
//   alert("necesiz");
// };

// let firstElem = document.querySelector(".first");
// let secondElem = document.querySelector(".second");
// let box = document.querySelector(".text");

// firstElem.addEventListener("click", function () {
//   //   box.style.backgroundColor = "red";

//   if (!box.classList.contains("first-color")) {
//     box.classList.add("first-color");
//     box.classList.remove("second-color");
//   }
// });

// secondElem.addEventListener("click", function () {
//   //   box.style.backgroundColor = "green";
//   if (!box.classList.contains("second-color")) {
//     box.classList.add("second-color");
//     box.classList.remove("first-color");
//   }
// });

//<li class="list-group-item">A third item</li>

// let ul = document.querySelector("ul");

// document.querySelector(".add").addEventListener("click", function () {
//   let input = document.querySelector(".input-text");
//   let text = input.value;
//   if (text.trim() == "") {
//     document.querySelector(".validation").classList.remove("d-none");
//     return;
//   } else {
//     document.querySelector(".validation").classList.add("d-none");
//   }

//   let li = document.createElement("li");
//   li.className = "list-group-item";
//   li.innerText = text;
//   ul.append(li);
//   input.value = "";
// });
