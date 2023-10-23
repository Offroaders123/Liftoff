await foo().then(() => console.log(1));
foo().then(() => console.log(2));
await bar().then(() => console.log(3));
bar().then(() => console.log(4));

async function foo(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve,200));
}
async function bar(): Promise<void> {
  Math.random();
}