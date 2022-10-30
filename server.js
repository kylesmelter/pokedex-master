const express = require('express');
const app = express();
const PORT = 8000;

class Pokemon {
    constructor(name, type, type2, hp, attack, defense, specialAttack, specialDefense, speed, move) {
        this.name = name,
        this.type = type,
        this.type2 = type2,
        this.hp = hp,
        this.attack = attack,
        this.defense = defense,
        this.specialAttack = specialAttack,
        this.specialDefense = specialDefense,
        this.speed = speed,
        this.move = move
    };
};

const bulbasaur = new Pokemon('Bulbasaur', 'Grass', 'Poison', 45, 49, 49, 65, 65, 45, 'Vine Whip');
const ivysaur = new Pokemon('Ivysaur', 'Grass', 'Poison', 60, 62, 63, 80, 80, 60, 'Giga-Drain');
const venusaur = new Pokemon('Venusaur', 'Grass', 'Poison', 80, 82, 83, 100, 100, 80, 'Solarbeam');
const charmander = new Pokemon('Charmander', 'Fire', 'None', 45, 49, 49, 60, 50, 65, 'Ember');
const charmeleon = new Pokemon('Charmeleon', 'Fire', 'None', 58, 64, 58, 80, 65, 80, 'Flamethrower');
const charizard = new Pokemon('Charizard', 'Fire', 'Flying', 78, 84, 78, 109, 85, 100, 'Fire Blast');
const squirtle = new Pokemon('Squirtle', 'Water', 'None', 44, 48, 65, 50, 64, 43, 'Water Gun');
const wartortle = new Pokemon('Wartortle', 'Water', 'None', 59, 63, 80, 65, 80, 58, 'Bubblebeam');
const blastoise = new Pokemon('Blastoise', 'Water', 'None', 79, 83, 100, 85, 105, 78, 'Hydro Pump');
const notAPokemon = new Pokemon('Not a Pokémon', 'No type', 0, 0, 0, 0, 0, 0, 'None');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) => {
    response.json(bulbasaur);
});

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})