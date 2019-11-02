const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

//父级路由
let router = new Router();
router.get("/", (ctx, next) => {
  ctx.body = `1111111111111111${ctx.querystring}`;
});

//路由装载
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("3000 koa router_2");
});
