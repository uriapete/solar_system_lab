const solarSystem = [    { name: "Mercury", ringSystem: false, moons: [] },    { name: "Venus", ringSystem: false, moons: [] },    { name: "Earth", ringSystem: false, moons: ["The Moon"] },    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }];

/*
1. Print the boolean for Mercury’s ringSystem
*/

console.log(`Example Prompt:`);
console.log(solarSystem[0].ringSystem);

// Prompt 1:
// Print the array of Jupiter’s moons to the console (no for loop, just print the entire array).

console.log(`\nPrompt 1:`);
console.log(solarSystem[4].moons);

// Prompt 2:
// 2. Print the name of Neptune’s moon “Nereid” to the console.

console.log('\nPrompt 2:')
console.log(solarSystem[7].moons[1]);

// Prompt 3:
// 3. Add a new moon called “Endor” to Venus’ moons array.

solarSystem[1].moons.push("Endor");

console.log('\nPrompt 3:')
console.log(solarSystem[1].moons);

// Prompt 4:
// Add a Pluto object to the solarSystem array using .push. The object should contain Pluto’s name, ringSystem false, and moons array (which includes “Charon”).

solarSystem.push({name: "Pluto", ringSystem: false, moons: ["Charon"]});

console.log('\nPrompt 4:')
console.log(solarSystem[solarSystem.length-1]);

// Prompt 5:
// Add a new key value pair to the Earth object: the key should be ‘diameter’, and the value should be Earth’s diameter in miles represented as a string.

solarSystem[2].diameter = "7918";

console.log('\nPrompt 5:')
console.log(solarSystem[2]);

// Prompt 6:
// Change Mercury’s ringSystem boolean to true.

solarSystem[0].ringSystem = true;

console.log('\nPrompt 6:')
console.log(solarSystem[0]);

// Prompt 7:
// Change Uranus’ moon “Umbriel” to “Oberon”

// console.log(solarSystem[6])
solarSystem[6].moons[3] = 'Oberon';
console.log('\nPrompt 7:')
console.log(solarSystem[6]);

// Prompt 8:
// Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array and include an if statement.

console.log('\nPrompt 8:');
solarSystem.filter(planet => (planet.ringSystem)).forEach(planet => {
    console.log(planet);
});