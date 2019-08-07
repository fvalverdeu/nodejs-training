import Router from "koa-router";
import PokemonController from "./controller"

const routers = new Router({prefix: "/pokemon"});
const controller = new PokemonController();

routers.get("/:id", controller.get);

export default routers;