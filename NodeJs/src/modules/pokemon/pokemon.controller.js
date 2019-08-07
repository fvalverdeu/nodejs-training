import PokemonService from "./pokemon.service";

const service = new PokemonService();

export default class {
    async getById(ctx) {
        const { id } = ctx.params;

        if (isNaN(id)) {
            ctx.status = 500;
            ctx.body = {
                status: ctx.status,
                title: "El id no es numero",
                default: "No se",
            };
            return;
        }
        
        const newId = parseInt(id);

        ctx.body = await service.findById(newId);
    }
}