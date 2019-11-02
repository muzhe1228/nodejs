const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

//子路由
let home = new Router();
home
  .get("/ken", async ctx => {
    ctx.body = "Home Page Ken Page";
  })
  .get("/todo", async ctx => {
    ctx.body = "Home Page Todo Page";
  });

//子路由
let page = new Router();
page
  .get("/ken", async ctx => {
    ctx.body = "Page Ken Page";
  })
  .get("/todo", async ctx => {
    ctx.body = "Page Todo Page";
  });

//父级路由
let router = new Router();
router.use("/home", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());

//路由装载
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("3000 koa router");
});
