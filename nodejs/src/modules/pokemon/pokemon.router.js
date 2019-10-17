import Router from "koa-router";
import PokemonController from "./pokemon.controller";

const router = new Router({ prefix: "/pokemon" });
const controller = new PokemonController();

router.get("/:id", controller.getById);

export default router;