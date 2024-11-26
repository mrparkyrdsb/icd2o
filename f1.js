// Two Functions Today
// Function 1: FizzBuzz from A to B
// Function 2: Vowel Counting from a word

// Functions
// Fizzbuzz: multiple of 3: fizz; multiple of 5: buzz; multiple of both: fizzbuzz
function fizzbuzz(start, end) {
    while (start <= end) {
        if (start % 3 == 0 && start % 5 == 0) {
            console.log("fizzbuzz");
        } else if (start % 3 == 0) {
            console.log("fizz");
        } else if (start % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(start);
        }
        start++;
    }
}

// counting a,e,i,o,u in a word
function vowel_count(word) {
    let i = 0;
    let stop = word.length;
    let counter = 0;
    
    while (i < stop) {
        let current = word.at(i);
        if (current == "a" || current == "A") {
            counter++;
        } else if (current == "e" || current == "E") {
            counter++;
        } else if (current == "i" || current == "I") {
            counter++;
        } else if (current == "o" || current == "O") {
            counter++;
        } else if (current == "u" || current == "U") {
            counter++;
        }
        
        i++;
    }
    //console.log(counter);
    return counter;
}

// End of Functions

// Our Main program
fizzbuzz(10, 20);

//vowel_count("hello, world!");
let answer = vowel_count("hello, world!");
let user_input = prompt("Enter a word: ");
let result2 = vowel_count(user_input);
console.log(answer);
console.log(result2);
