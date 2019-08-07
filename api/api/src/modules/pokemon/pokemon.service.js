import axios from "axios";

export default class {
    async findById(id) {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = {};

        pokemon.id = id;
        pokemon.name = data.name;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        pokemon.images = {
            normal: data.sprites.front_default,
            shiny: data.sprites.front_shiny
        };

        return pokemon;
    }
}