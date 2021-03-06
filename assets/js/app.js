const displayPassword = document.querySelector(".display");
const inputQtd = document.querySelector(".input-qtd");
const chkUppercases = document.querySelector(".chk-uppercases");
const chkLowercases = document.querySelector(".chk-lowercases");
const chkNumber = document.querySelector(".chk-numbers");
const chkSymbols = document.querySelector(".chk-symbols");
const buttomPassword = document.querySelector(".generate-password");

//função que gera um numero aleatorio, que vai ser usado como código da tabela asc
function codeAsc(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//função que gera caractere maiusculo
function generateUppercase() {
  return String.fromCharCode(codeAsc(65, 91));
}
//função que gere caractere minusculo
function generateLowercase() {
  return String.fromCharCode(codeAsc(97, 123));
}
//função que gera numero
function generateNumber() {
  return String.fromCharCode(codeAsc(48, 58));
}
//funçao que gera símbolo
function generateSymbol() {
  const symbols = "!@#$%&*)([{]}_~?/";
  return symbols[codeAsc(0, symbols.length)];
}
//função que gera a senha
function generatePassword(qtd, upper, lower, num, simb) {
  const password = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    upper && password.push(generateUppercase());
    lower && password.push(generateLowercase());
    num && password.push(generateNumber());
    simb && password.push(generateSymbol());
  }
  return password.join("").slice(0, qtd);
}

buttomPassword.addEventListener("click", () => {
  displayPassword.innerHTML = newPasswordGenerate();
});

function newPasswordGenerate() {
  const password = generatePassword(
    inputQtd.value,
    chkUppercases.checked,
    chkLowercases.checked,
    chkNumber.checked,
    chkSymbols.checked
  );

  return password || "Selecione o tipo de caractere...";
}
