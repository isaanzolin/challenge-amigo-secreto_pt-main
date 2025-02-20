//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let amigoSorteado = "";


function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (listaDeAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  listaDeAmigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  listaDeAmigos.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    listaElement.appendChild(item);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 3) {
    alert("Adicione pelo menos três nomes para sortear!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  amigoSorteado = listaDeAmigos[indiceSorteado];

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>Seu amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
