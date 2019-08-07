import Koa from "koa";
import routes from "./routes";

const server = new Koa();

routes.map(r =>{
    server.use(r.routes());
    server.use(r.allowedMethods());
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server listen in port 3000");
});


// const Koa = require ("koa");
// const Router = require ("koa-router");

// const server = new Koa();
// const countryRouter = new Router({prefix: "/country"});
// const indicatorRouter = new Router({prefix: "/indicator"});

// countryRouter.get("/", ctx => {
//     //ctx.status por defecto es 200, ctx es una variable de koa
//     ctx.body = {
//         id: 1,
//         iso: "AR",
//         name: "Argentina"
//     };
// })

// indicatorRouter.get("/", ctx => {
//     ctx.body = {
//         venta_neta:1000,
//         rdd:3000,
//         peg:-6
//     };
// })

// server
//     .use(countryRouter.routes())
//     .use(countryRouter.allowedMethods())
//     .use(indicatorRouter.routes())
//     .use(indicatorRouter.allowedMethods())


// server.listen(3000, "0.0.0.0", () => {
//     console.log("Server listen in port 3000");
// })