const user = {
    name: "Andrew",
    cities: ['Philly', 'New york', 'Dublin'],
    printCities: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(city => { //arrow function's this points to its parent's [printCities] this
            console.log(`${this.name} has lived in ${city}`)
        });
    }
}

const multiplier = {
    numbers: [2,3,4,5,6,7,8],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

user.printCities();

console.log(multiplier.multiply());

const user = {
    name: "Goladot",
    age: "11",
    location: "Arlington, VA"
};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {( user.age && user.age >= 18) && <p> Age: {user.age} </p> }
        {getLocation(user.location)}
    </div>
);
//undefined, null and boolean false are ignored by JSX
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    
}
let count = 0;
 let addOne = () => {
     count = count + 1;
     console.log(count);
     renderCounterApp();
 }
 const minusOne = () => {
     count--;
     renderCounterApp();
    console.log('minusOne');
}

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
}

// const templateThree = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree, document.getElementById('app'));
};

renderCounterApp();