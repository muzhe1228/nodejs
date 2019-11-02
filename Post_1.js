const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    //显示表单页面
    let html = `
    <h1>webKen koa2 request POST</h1>
    <form method="POST" action="/">
    <p>userName</p>
    <input name="userName" /><br/>
    <p>age</p>
    <input name="age" /><br/>
    <p>websit</p>
    <input name="websit" /><br/><br/><br/>
    <button type="submit">submit</button>
    </form>
    `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    // let postData = await parsePostData(ctx);
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = "<h1>404!</h1>";
  }
});


app.listen(3000, () => {
  console.log("[POST] server is starring at port 3000");
});
