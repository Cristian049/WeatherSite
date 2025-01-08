const terms = document.querySelector(".terms");
const privacy = document.querySelector(".privacy");
const cookie = document.querySelector(".cookie");

terms.addEventListener("click", () => {
  const newWindow = window.open("term.html", "_self");
  newWindow.focus();
  newWindow.onload = () => {
    newWindow.document.querySelector(".terms").classList.add("btn-active");
  };
});

privacy.addEventListener("click", () => {
  const newWindow = window.open("privacy.html", "_self");
  newWindow.focus();
  newWindow.onload = () => {
    newWindow.document.querySelector(".privacy").classList.add("btn-active");
  };
});

cookie.addEventListener("click", () => {
  const newWindow = window.open("cookie.html", "_self");
  newWindow.focus();
  newWindow.onload = () => {
    newWindow.document.querySelector(".cookie").classList.add("btn-active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  cookie.classList.add("btn-active");
});
