// @Author : Jerico Lusi A. Ungos
// @Student Number: 2021-68060
// @Section: UV-7L

// Imported the needed modules for the program
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// Function to generate a unique ID
function generateUniqueID(firstName, lastName) {
    // Returns the generated unique ID comprised of the lowercased first and last name, and a generated random 8-character string
    return firstName.toLowerCase() + lastName.toLowerCase() + uuidv4().substring(0, 8);
}

// Function to verify if the parameters are complete and valid, and when it is true, it will be stored as a new line in a txt file
function addAccount([firstName, lastName, email, age]){
    // Checks if all the fields/parameters are present/defined
    if (firstName === undefined){
        firstName = 'No First Name'; // If there was no first name, it will store a default value of 'No First Name'
        return false;
    }
    if (lastName === undefined){
        lastName = 'No Last Name'; // If there was no last name, it will store a default value of 'No Last Name'
        return false;
    }
    if (email === undefined){
        email = 'No Email'; // If there was no email, it will store a default value of 'No Email'
        return false;
    }
    if (age === undefined){
        age = 'No Age'; // If there was no age, it will store a default value of 'No Age'
        return false;
    }

    // if (firstName === undefined || lastName === undefined || email === undefined || age === undefined) {
    //     return false;
    // }

    // Checks if at least 1 of the paraemters are non-empty strings
    if (firstName === "" || lastName === "" || email === ""){
        return false; 
    }

    // Checks if the email is in a valid format
    if (validator.isEmail(email) == false){
        return false;
    }

    // Checks if the age of the user is at least 18 years old
    if (age < 18){
        return false;
    }
    
    // If all the conditions of a user were satisfied, creates the String of the user's information to be stored in the txt file
    var userInfo = firstName + "," + lastName + "," + email + "," + age + "," + generateUniqueID(firstName, lastName) + "\n";

    try {
        appendFileSync('users.txt', userInfo); // Appends the user's information to the txt file
        console.log('The user was successfully added to file of users!'); // Prompts that the user was successfully added to the txt file
        return true;
    } catch (err) {
        /* Handle the error */
        console.log("No data was added to the file of users!"); // Shows a corressponding prompt that there was an error in adding the user to the txt file
    }
}

export {addAccount}; // Assign the addAccount function to the exports property