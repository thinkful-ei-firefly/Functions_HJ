
function getYearOfBirth (age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob = 2019 - age;
    return `I was born in ${yob}.`;
}

const greeting1 = createGreeting("Julian", 32);
console.log(greeting1);