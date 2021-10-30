const form = document.querySelector(".signup-form");
const inputs = document.querySelectorAll(".signup-form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.children[1].classList.add("error");
      input.parentElement.children[2].classList.add("error");
    } else {
      input.parentElement.children[1].classList.remove("error");
      input.parentElement.children[2].classList.remove("error");
    }
  });
});
