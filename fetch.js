let currentPokemon = null;
let team = [];

function getPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon not found");
            }
            return response.json();
        })
        .then(data => {
            currentPokemon = data;
            updatePage(data);
        })
        .catch(error => {
            alert("Pokemon not found!");
        });
}

function updatePage(data) {

    // Image
    const image = document.getElementById("pokemonImage");
    image.src = data.sprites.front_default;
    image.alt = data.name;

    // Sound (cry)
    const cry = document.getElementById("pokemonCry");
    cry.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`;

    // Moves
    const moveSelects = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    moveSelects.forEach(select => {
        select.innerHTML = "";
    });

    data.moves.slice(0, 20).forEach(moveObj => {
        moveSelects.forEach(select => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option.cloneNode(true));
        });
    });
}

function addToTeam() {
    if (!currentPokemon) {
        alert("Select a Pokemon first!");
        return;
    }

    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    const pokemonEntry = {
        name: currentPokemon.name,
        image: currentPokemon.sprites.front_default,
        moves: selectedMoves
    };

    team.push(pokemonEntry);
    displayTeam();
}

function displayTeam() {
    const teamDisplay = document.getElementById("teamDisplay");
    teamDisplay.innerHTML = "";

    team.forEach(pokemon => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h4>${pokemon.name}</h4>
            <img src="${pokemon.image}" width="80">
            <p>Moves: ${pokemon.moves.join(", ")}</p>
            <hr>
        `;
        teamDisplay.appendChild(div);
    });
}
