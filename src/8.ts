interface Person {
  name: string;
  age: number;
}

function getPerson(): Person {
  const names = ['Alice', 'Bob', 'Charlie'];
  const ages = [25, 30, 35];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * ages.length),
  };
}
