function soma() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = parseInt(n1) + parseInt(n2);
    document.getElementById('resultado').innerHTML = resultado;
}

async function buscar() {
    let pokemon = document.getElementById('pokemon').value;
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    let data = await response.json()
    document.getElementById('nome').innerHTML = "Nome: " + data.name;
    document.getElementById('imagem').src = data.sprites.front_default;
}

async function enviar(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let info = {
        name: nome,
        email: email,
        lastname: sobrenome,
        message: mensagem
    }
    let response = await fetch('https://api-aula.up.railway.app/generica', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    let data = await response.json()
    console.log(data);
}