document.querySelector(".submit").addEventListener("click", function () {
  let mail = document.querySelector(".mail").textContent;
  if (document.getElementById("email").value === mail) {
    document.querySelector(".container-info").style.display = "block";
    document.querySelector(".email-submit").style.display = "none";
  } else {
    confirm("try again please!");
  }
});

let listViewMore = document.querySelectorAll(".view-more");
let listViewLess = document.querySelectorAll(".view-less");
let info = document.querySelectorAll(".list-info");
let hover = document.querySelectorAll(".tag-info");

for (let i = 0; i < listViewMore.length; i++)
  listViewMore[i].addEventListener("click", function () {
    listViewMore[i].classList.add("hidden");
    listViewLess[i].classList.remove("hidden");
    info[i].classList.remove("hidden");
    hover[i].classList.remove("hover");
  });

for (let j = 0; j < listViewLess.length; j++)
  listViewLess[j].addEventListener("click", function () {
    listViewMore[j].classList.remove("hidden");
    listViewLess[j].classList.add("hidden");
    info[j].classList.add("hidden");
    hover[j].classList.add("hover");
  });
