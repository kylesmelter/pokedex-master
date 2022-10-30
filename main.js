document.querySelector('.button').addEventListener('click', findPokemon);

async function findPokemon() {

    const selection = document.querySelector('.pokemonChoice').value;
    const res = await fetch(`/api/:name=${selection}`);
    const data = await res.json();

    console.log(data);
}