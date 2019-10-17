import Koa from "koa";
import Router from "koa-router";
import pokemonRoute from "./pokemon/route"

const server = new Koa();
const routers = new Router();

routers.get("/", ctx=> {
   ctx.body ={
       hello : "hola mundo"
   }
});
server.use(routers.routes());
server.use(routers.allowedMethods());

server.use(pokemonRoute.routes());
server.use(pokemonRoute.allowedMethods());

server.listen(3000, "0.0.0.0", ()=>{
   console.log("Server inicializado!!!");
});