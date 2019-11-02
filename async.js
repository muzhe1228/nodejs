

function getSomething() {
  return "something";
}

async function testAsync() {
  return "Hello async";
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}
test(); //something Hello async
const result = testAsync();
console.log(result); //Promise { 'Hello async' }

function Time() {
  return new Promise(resolve => {
    setTimeout(() => resolve("long_time_value"), 2000);
  });
}

async function test1(){
    const v = await Time()
    console.log(v)
}

test1()
