
function getYearOfBirth (age) {
    return 2018 - age;
    
    
    
}

function createGreeting(name, age) {
    if (age < 0){
        throw new Error('Age cannot be negative.')
    }
    
    
    const yob = 2019 - age;
    return `I was born in ${yob}.`;
}

try { 
const greeting1 = createGreeting("Julian", -32);
console.log(greeting1);
} catch(e) {
    console.error(e.message)
}