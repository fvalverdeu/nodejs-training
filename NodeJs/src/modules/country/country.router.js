import Router from "koa-router";
import CountryController from "./country.controller";

const router = new Router({prefix:"/country"});
const controller = new CountryController();

router.get("/", controller.get);
router.get("/:id", controller.getById);

export default router;