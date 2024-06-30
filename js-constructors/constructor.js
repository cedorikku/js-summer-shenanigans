function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = () => {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

let cat = new Cat('Bertie', 'Cymric', 'white');
cat.greeting();
let cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');
cat2.greeting();