const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  if (ctx.url == "/index") {
    ctx.cookies.set("MyName", "Ken", {
      domain: "127.0.0.1",
    //   path: "/index",
      maxAge: 1000 * 60 * 60 * 24,
      expires: new Date("2019-11-11"),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = "Cookies Ok";
  } else {
    if (ctx.cookies.get("MyName")) {
      ctx.body = ctx.cookies.get("MyName");
    } else {
      ctx.body = "Cookie is null!";
    }
  }
});

app.listen(3000, () => {
  console.log("[cookie] server is starring at port 3000");
});
