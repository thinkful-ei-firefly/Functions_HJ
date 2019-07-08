

function createGreeting(name, age) {
    const yearOf = 2019 - age;
    return `I was born in ${yearOf}.`;
}

const greeting1 = createGreeting("Julian", 32);
console.log(greeting1);