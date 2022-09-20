console.log("Hello World!");

let myAnniversary = 'December 24, 2021';

let anniversaryDate = {
    month: 'December',
    date: '24',
    year: '2021',
    location: {
        state: 'CA',
        city: 'Sacramento'
    },
    attendees: [
        {
            name: 'Who',
            age: '22',
            wearing: ['shirt', 'pants']
        },
        {
            name: 'What',
            age: '33',
            wearing: ['dress', 'socks']
        }
    ]
};

console.log('When was my anniversary, again?', myAnniversary);

/*
let month = 'December';
let date = '24';
let year = '2021';
*/

myAnniversary = `Your anniversary is on ${anniversaryDate.month} ${anniversaryDate.date} ${anniversaryDate.year}`; // variable interpolation

console.log(myAnniversary);

console.log(anniversaryDate.location.state);

console.log(anniversaryDate.attendees[0].wearing[1]);

for(const person of anniversaryDate.attendees)
    for(const clothing of person.wearing)
        console.log(`${person.name} is wearing ${clothing}`);

// camelCase
// snake_case
// kebob-case
// PascalCase

let person = {
    name: 'John',
    relationship: 'friend',
    age: 24,
    wearing: ['shirt', 'hat', 'pants']
}

// input: person ; output: boolean

function canTheyDrink(card) {
    return card.age >= 21 ? true : false;
}

console.log(`Can ${person.name} drink alcohol: ${canTheyDrink(person)}`);

console.log('Can Annie drink?', canTheyDrink({name: 'Annie', age: 8}));

// -------------------

// pass a string argument named aWord into function
function isWordSilly(aWord) {
    // initialize sillyWords array with 6 various strings
    let sillyWords = ['squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah'];

    // for every element of sillyWords array, loop
    for (let oneSillyWord of sillyWords){
        // if the current element of the loop is strictly equal to the passed variable aWord, return true
        if (oneSillyWord === aWord) {
            return true;
        }
    }
    // otherwise return false
    return false; 
} 

// -------------------

// git test