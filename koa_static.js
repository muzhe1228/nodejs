const Koa = require("koa");
const path = require("path");

const Static = require("koa-static");

const app = new Koa();

let staticPath = "./static";

app.use(Static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  ctx.body = "Koa Static";
});

app.listen(3000, () => {
  console.log("Static starting 3000 port");
});
