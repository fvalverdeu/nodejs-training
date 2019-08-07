import CountryRepository from "./country.repository";

let repository = new CountryRepository();

class CountryController {
    async get(ctx) {
        ctx.body = await repository.list();
    }

    async getById(ctx) {
        const { id } = ctx.params;
        const newId = parseInt(id);

        ctx.body = await repository.find(newId);
    }
}

export default CountryController;
