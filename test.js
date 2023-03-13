// Import the addAccount function from functions.js for testing
import {addAccount} from './functions.js';

// Test Cases
console.log(addAccount(['', 'Ungos', 'jaungos@up.edu.ph', 23]));
console.log(addAccount(['Jerico', '', 'jaungos@up.edu.ph', 23]));
console.log(addAccount(['Jerico', 'Ungos', '', 23]));
console.log(addAccount(['Jerico', 'Ungos', 'jaungos@up.edu.ph', 17]));
console.log(addAccount([]));
console.log(addAccount(['Jerico', 'Ungos', 'jaungos@up.edu.ph', 18]));
console.log(addAccount(['Tim', 'Berners-Lee', 'tim@w3c.com', 25]));
console.log(addAccount(['Ted', 'Nelson', 'ted.n@w3c.com', 43]));
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));