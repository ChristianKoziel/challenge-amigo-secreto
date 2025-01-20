const amigos = [];
const sorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome !== "") {
        if (amigos.includes(nome)) { 
            alert("Este nome já foi adicionado!");
        } else {
            amigos.push(nome);
            document.getElementById('listaAmigos').innerHTML += `<li>${nome}</li>`;
        }
        document.getElementById('amigo').value = "";
    } else {
        alert("Digite um nome antes de adicionar!");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return;
    }

    if (sorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indice];

    while (sorteados.includes(nomeSorteado)) {
        indice = Math.floor(Math.random() * amigos.length);
        nomeSorteado = amigos[indice];
    }

    sorteados.push(nomeSorteado);
    document.getElementById('resultado').innerHTML += `<li>Amigo secreto: ${nomeSorteado}</li>`;
}

function limparLista() {
    amigos.length = 0;
    sorteados.length = 0;
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('mensagem-erro').innerHTML = "";
    document.getElementById('amigo').value = "";
}