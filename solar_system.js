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