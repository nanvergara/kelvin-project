// 'const' is like 'var' but it's value can not be changed
const kelvin = 0;

// Celsius is 273 less than Kelvin, so a 'const' needs to be set for it
const Celsius = kelvin - 273;

// Establishing Farenheit with 'let' because it's value will be rounded
let Farenheit = Celsius * (9/5) + 32;

// math.floor will round this value down
Farenheit = Math.floor(Farenheit); 

console.log(`The temperature is ${Farenheit} degrees Farenheit.`);

// 0 Kelvin in Farenheit is -460 degrees !!
// extra practice
let Newton = Celsius * (33/100);

Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);
