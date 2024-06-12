//library for books

const cars = [
    {
        id: 1, make: "Toyota", model: "Camry", price: 24425, inStock: 'yes',
        features: {
            engine: "2.5L4-cylinder",
            horsepower: 203,
        }
    },
    {
        id: 2, make: "Ford", model: "Mustang", price: 27470, inStock: 'No',
        features: {
            engine: "2.3Lturbo4-cylinder",
            horsepower: 310
        }
    },
    {
        id: 3, make: "Chevrolet", model: "Tahoe", price: 49900, inStock: 'yes',
        features: {
            engine: "5.3LV8",
            horsepower: 355,
        }
    },
    {
        id: 4, make: "Tesla", model: "Model3", price: 39990, inStock: 'yes',
        features: {
            engine: "Electric",
            horsepower: 283
        }
    },
    {
        id: 5, make: "BMW", model: "3Series", price: 41450, inStock: 'No',
        features: {
            engine: "2.0Lturbo4-cylinder",
            horsepower: 255
        }
    },
];

console.log('---------------------------');
console.log('All cars');
console.log('-----');
cars.forEach(car => {
    console.log(car.make);
});

console.log('---------------------------');
console.log("cars who have the value more than 30000");
console.log('-----');


cars.forEach(cars => {
    if (cars.price > 30000) {
        console.log(cars.make);
    }
})

console.log('----------------------------------');
console.log('cars have horsepower more than 300');
console.log('-----');

cars.forEach(cars => {
    if (cars.features.horsepower > 300) {
        console.log(cars.make);
    }
})

console.log('----------------------------------');

console.log('out of stock cars');
console.log('-----');

const carstock = cars.filter(car => car.inStock == "No")

carstock.forEach(cars => {
    console.log(cars.make);
})

console.log('----------------------------------');
console.log('revenue generated from when all the available cars are sold ');
console.log('-----');

const stockcars = cars.filter(car => car.inStock == "yes")

const revenue  = stockcars.reduce((sum , cars) => sum + cars.price ,0)

console.log(revenue);