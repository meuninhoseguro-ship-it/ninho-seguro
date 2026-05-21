const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {

const usuario = document.querySelector('input[type="text"]').value;
const senha = document.querySelector('input[type="password"]').value;

if(usuario === "ninho123" && senha === "ninho123"){

alert("Login realizado com sucesso!");

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

}else{

alert("Login ou senha incorretos.");

}

});
