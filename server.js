const express = require('express');
const app = express();
const PORT = 8000;

// class Pokemon {
//     constructor(name, type, type2, hp, attack, defense, specialAttack, specialDefense, speed, move) {
//         this.name = name,
//         this.type = type,
//         this.type2 = type2,
//         this.hp = hp,
//         this.attack = attack,
//         this.defense = defense,
//         this.specialAttack = specialAttack,
//         this.specialDefense = specialDefense,
//         this.speed = speed,
//         this.move = move
//     };
// };

// const bulbasaur = new Pokemon('Bulbasaur', 'Grass', 'Poison', 45, 49, 49, 65, 65, 45, 'Vine Whip');
// const ivysaur = new Pokemon('Ivysaur', 'Grass', 'Poison', 60, 62, 63, 80, 80, 60, 'Giga-Drain');
// const venusaur = new Pokemon('Venusaur', 'Grass', 'Poison', 80, 82, 83, 100, 100, 80, 'Solarbeam');
// const charmander = new Pokemon('Charmander', 'Fire', 'None', 45, 49, 49, 60, 50, 65, 'Ember');
// const charmeleon = new Pokemon('Charmeleon', 'Fire', 'None', 58, 64, 58, 80, 65, 80, 'Flamethrower');
// const charizard = new Pokemon('Charizard', 'Fire', 'Flying', 78, 84, 78, 109, 85, 100, 'Fire Blast');
// const squirtle = new Pokemon('Squirtle', 'Water', 'None', 44, 48, 65, 50, 64, 43, 'Water Gun');
// const wartortle = new Pokemon('Wartortle', 'Water', 'None', 59, 63, 80, 65, 80, 58, 'Bubblebeam');
// const blastoise = new Pokemon('Blastoise', 'Water', 'None', 79, 83, 100, 85, 105, 78, 'Hydro Pump');
// const notAPokemon = new Pokemon('Not a Pokémon', 'No type', 0, 0, 0, 0, 0, 0, 'None');

const pokemon = {
    
    'bulbasaur': {
        'name': 'Bulbasaur',
        'type': 'Grass',
        'type2': 'Poison',
        'move': 'Vine Whip',
        'hp': 45,
        'attack': 49,
        'defense': 49,
        'sp. atk': 65,
        'sp. def': 65,
        'speed': 45,
        'red-blue': 'Starter choice',
        'yellow': 'Cerulean City',
    },

    'ivysaur': {
        'name': 'Ivysaur',
        'type': 'Grass',
        'type2': 'Poison',
        'move': 'Mega Drain',
        'hp': 60,
        'attack': 62,
        'defense': 63,
        'sp. atk': 80,
        'sp. def': 80,
        'speed': 60,
        'red-blue': 'Evolve from Bulbsaur',
        'yellow': 'Evolve from Bulbasaur',
    },

    'venusaur': {
        'name': 'Venusaur',
        'type': 'Grass',
        'type2': 'Poison',
        'move': 'Solarbeam',
        'hp': 80,
        'attack': 82,
        'defense': 83,
        'sp. atk': 100,
        'sp. def': 100,
        'speed': 80,
        'red-blue': 'Evolve from Ivysaur',
        'yellow': 'Evolve from Ivysaur',
    },

    'charmander': {
        'name': 'Charmander',
        'type': 'Fire',
        'type2': 'None',
        'move': 'Ember',
        'hp': 39,
        'attack': 52,
        'defense': 43,
        'sp. atk': 60,
        'sp. def': 50,
        'speed': 65,
        'red-blue': 'Starter choice',
        'yellow': 'Route 24',
    },

    'charmeleon': {
        'name': 'Charmeleon',
        'type': 'Fire',
        'type2': 'None',
        'move': 'Flamethrower',
        'hp': 58,
        'attack': 64,
        'defense': 58,
        'sp. atk': 80,
        'sp. def': 65,
        'speed': 80,
        'red-blue': 'Evolve from Charmander',
        'yellow': 'Evolve from Charmander',
    },

    'charizard': {
        'name': 'Charizard',
        'type': 'Fire',
        'type2': 'Flying',
        'move': 'Fire Blast',
        'hp': 78,
        'attack': 84,
        'defense': 78,
        'sp. atk': 109,
        'sp. def': 85,
        'speed': 100,
        'red-blue': 'Evolve from Charmeleon',
        'yellow': 'Evolve from Charmeleon',
    },

    'squirtle': {
        'name': 'Squirtle',
        'type': 'Water',
        'type2': 'None',
        'move': 'Water Gun',
        'hp': 44,
        'attack': 48,
        'defense': 65,
        'sp. atk': 50,
        'sp. def': 64,
        'speed': 43,
        'red-blue': 'Starter choice',
        'yellow': 'Vermillion City',
    },

    'wartortle': {
        'name': 'Wartortle',
        'type': 'Water',
        'type2': 'None',
        'move': 'Bubblebeam',
        'hp': 59,
        'attack': 63,
        'defense': 80,
        'sp. atk': 65,
        'sp. def': 80,
        'speed': 58,
        'red-blue': 'Evolve from Squirtle',
        'yellow': 'Evolve from Squirtle',
    },

    'blastoise': {
        'name': 'Blastoise',
        'type': 'Water',
        'type2': 'None',
        'move': 'Hydro Pump',
        'hp': 79,
        'attack': 83,
        'defense': 100,
        'sp. atk': 85,
        'sp. def': 105,
        'speed': 78,
        'red-blue': 'Evolve from Wartortle',
        'yellow': 'Evolve from Wartortle',
    },

    'notAPokemon': {
        'type': 'None',
        'move': 'None',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
    const pokemonName = request.params.name.toLowerCase();
    if(pokemon[pokemonName]) {
        response.json(pokemon[pokemonName]);
    } else {
        response.json(pokemon['notAPokemon']);
    };
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}, better go catch it!`);
})

// app.get('/api/:name', (request, response) => {
//     const pokemonName = console.log(request.params.name.toLowerCase());
//     if(pokemon[pokemonName]) {
//         response.json(pokemon[pokemonName]);
//     } else {
//         response.json(pokemon['notAPokemon']);
//     };
//     response.json(pokemon);
// });

// app.listen(PORT, () => {
//     console.log(`The server is now running on port ${PORT}!`)
// })