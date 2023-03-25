export const searchPokemon = async (pokemon) => {
    try {       //`https://pokeapi.co/api/v2/pokemon/${pokemon}`
        let url = `https://api.itbook.store/1.0/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err) {}
}

export const getPokemons = async (limit = 25, offset = 0) => {
    try {       //`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`                           
        let url = `https://api.itbook.store/1.0/new?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err) {}
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;        
    } catch (err) {} 
}