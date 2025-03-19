const greeting = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const name = names[Math.floor(Math.random() * names.length)];
  console.log(`Hello, ${name}!`);
};
greeting();
