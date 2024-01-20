const input = document.querySelector(".valor");
const button = document.querySelector(".button");

const containerResult = document.querySelector(".mostrar-valor");
const result = document.querySelector(".result");

let newResult = "";

/*Fazer um programa que recebe um valor número qualquer em milivolts e converte para ppm. */

const convesaoParaPpm = () => {
    const fatorConversao = "11000000e-03";
    if (isNaN(input.value) === false) {
        const conversao = input.value * fatorConversao;
        containerResult.classList.remove("hide");
        result.innerHTML = conversao;
        newResult = conversao;

        input.value = "";
    } else {
        alert("Permitido somente número");
    }
}

const copyResult = () => {
    navigator.clipboard.writeText(newResult);
    alert("Senha copiada com sucesso!");
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    convesaoParaPpm();
});
result.addEventListener('click', (e) => {
    e.preventDefault();
    copyResult();
});
