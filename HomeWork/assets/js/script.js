"use strict";

let sunicon = document.querySelector(".sun i");
let sun = document.querySelector(".sun");

sunicon.addEventListener("click", function () {
  sun.classList.toggle("moon");
});
