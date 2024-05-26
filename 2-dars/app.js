let img = document.querySelector("img");
let inp = document.querySelector("input");

let i = 0;

img.addEventListener("click", () => {
  i++;

  if (i  % 2 != 0) {
    inp.type = "text";
    img.src = "./img/yes.png";
  } else{
    inp.type = "password";
    img.src = "./img/no.png";
  }
});
