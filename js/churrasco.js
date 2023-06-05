const form = document.getElementById("meuForm");
const convidados = document.getElementById("lista-convidados");
const alunosArray = JSON.parse(localStorage.getItem("alunosArray")) || [];

alunosArray.forEach((elemento) => {
  newEvent(elemento);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const aluno = e.target.elements["aluno"];
  const qtde = e.target.elements["qtde"];

  const alunoStorage = {
    aluno: aluno.value,
    qtde: qtde.value,
  };

  alunosArray.push(alunoStorage);
  newEvent(alunoStorage);
  localStorage.setItem("alunosArray", JSON.stringify(alunosArray));
  aluno.value = "";
  qtde.value = "";
  aluno.focus();
});

function newEvent(alunoADD) {
  if (aluno === "" || qtde === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const newItem = document.createElement("li");
  newItem.innerHTML = alunoADD.aluno;
  newItem.classList.add("item");
  const numeroItem = document.createElement("span");
  numeroItem.innerHTML = alunoADD.qtde;
  newItem.appendChild(numeroItem);
  convidados.appendChild(newItem);
}
