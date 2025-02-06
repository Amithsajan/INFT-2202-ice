// Animal.js

class Animal {
    // Properties for the Animal class
    constructor({ name, eyes, legs, breed, sound }) {
        this.id = crypto.randomUUID(); // Generate a unique ID
        this.name = name;
        this.eyes = eyes;
        this.legs = legs;
        this.breed = breed;
        this.sound = sound;
    }

    // Method to return a string representation of the animal
    toString() {
        return `Animal: ${this.name}, Breed: ${this.breed}, Sound: ${this.sound}`;
    }

    // Method to return an object representation of the animal
    toObject() {
        return {
            id: this.id,
            name: this.name,
            eyes: this.eyes,
            legs: this.legs,
            breed: this.breed,
            sound: this.sound
        };
    }

    // Method to return a JSON string representation of the animal
    toJSON() {
        return JSON.stringify(this.toObject());
    }
}

// Default export
export default Animal;

//*! Used a factory function */

// const Animals = ({ eyes, legs, sound, breed, name }) => {
//     // Private properties
//     const id = crypto.randomUUID();
//     const animalData = {
//         eyes,
//         legs,
//         sound,
//         breed,
//         name,
//     };

//     // Public methods
//     return {
//         toObject: function() {
//             return {
//                 ...animalData, 
//                 id: id,
//             };
//         },
//         toString: function() {
//             return `Animal: ${animalData.name}, Breed: ${animalData.breed}`;
//         },
//         toJSON: function() {
//             return JSON.stringify(this.toObject());
//         }
//     };
// };

