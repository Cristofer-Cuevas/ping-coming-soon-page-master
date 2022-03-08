const form = document.getElementById("form");

const inpEmail = document.getElementById("inp-email");

const bttNotify = document.getElementById("btt-notify");

console.log(inpEmail.value);

const provide1 = document.getElementById("provide1");

const provide2 = document.getElementById("provide2");

const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const fragment = document.createDocumentFragment();

bttNotify.addEventListener("click", () => {
  if (regEx.test(inpEmail.value) == true) {
    form.submit();
  } else {
    if (innerWidth <= 719) {
      provide1.classList.add("show-error");
      inpEmail.classList.add("red-border");
    } else if (innerWidth >= 720) {
      provide2.classList.add("show-error");
      inpEmail.classList.add("red-border");
    }
  }
});
