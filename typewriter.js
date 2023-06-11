const sentence = "hello there from lighthouse labs";
let c = "";
let i = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
  process.stdout.write(sentence[i]);
  }, i * 50);
};


setTimeout(() => {
  console.log('\n');
 }, sentence.length * 50);
