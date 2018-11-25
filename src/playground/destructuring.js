const person = {
  name: 'Blow',
  age: 20,
  location: {
    city: 'Philly',
  }
}

const { name, age } = person;

//use default value for name and rename temp into a tempearture variable with default of 10
const { city = 'Lagos', temp: temperature = 10 } = person.location;
console.log(`${name} is ${age} and he lives in ${city} where it's ${temperature}`);

const book = {
  title: 'Ego power',
  author: 'Ryan Gol',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['1299 S Junitor Street', 'Philly', 'Pennsylvania', '19347'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
