function soma(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resultado = parseInt(n1) + parseInt(n2);
    document.getElementById('resultado').innerHTML = resultado;
}

function buscar(){
    var pokemon = document.getElementById('pokemon').value;
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon)
    .then(response => response.json())
    .then(data => {
        document.getElementById('nome').innerHTML = "Nome: " + data.name;
        document.getElementById('imagem').src = data.sprites.front_default;
    })


}