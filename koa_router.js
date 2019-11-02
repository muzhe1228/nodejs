const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router({
  //添加前缀
  // prefix:"/ken"
});

router
  .get("/", (ctx, next) => {
    ctx.body = "Hello Ken";
  })
  .get("/todo", (ctx, next) => {
    ctx.body = "Todo Page";
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("3000 koa router");
});
