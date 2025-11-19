// To receive a random Pokemon
const getRandomPokemon = async () => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon');
        }

        const pokemonObj = await response.json();
        return pokemonObj;
    } catch (error) {
        console.error('Error:', error);
    }
};

// Render the Pokemon page
const renderPokemon = (pokemonObj) => {
    const container = document.querySelector('.pokemon-ctr');
    container.innerHTML = '';

    const img = document.createElement('img');
    img.src = pokemonObj.sprites.front_default;
    img.alt = pokemonObj.name;
    img.style.width = '150px';

    const name = document.createElement('p');
    name.textContent = pokemonObj.name.toUpperCase();

    container.append(img, name);

    return pokemonObj;
};

// Event listener for the button
document.getElementById('fetchBtn').addEventListener('click', async () => {
    const pokemon = await getRandomPokemon();
    if (pokemon) renderPokemon(pokemon);
});