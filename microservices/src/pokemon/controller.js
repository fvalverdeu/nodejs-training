import PokemonService from "./service";
//import service from "./service";

const service = new PokemonService();

export default class {
    async get(ctx) {
        const id = ctx.params.id;
        const res = await service.find(id);

        ctx.body = res;
    }
}