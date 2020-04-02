var btnSingIn = document.querySelector("#singIn");
var btnSingUp = document.querySelector("#singUp");
var body = document.querySelector("body");

btnSingIn.addEventListener("click", function() {
  body.className = "singInJs";
});

btnSingUp.addEventListener("click", function() {
  body.className = "singUpJs";
});

const btn = document.querySelector("#create");

btn.addEventListener("click", () => {
  if (name === "" || email === "" || password === "") {
    alert("preencha todos os campos!");
  }
});
