/*
<<<<<<< HEAD
 *  Service constructor
 */
function AnimalService() {
    function initAnimals() {
        let animals = [];
        let index = 0;
        while (animals.length < 300) {
            animals.push({
                "name": `name ${index++}`,
                "breed": "Grizzly Bear",
                "legs": 4,
                "eyes": 2,
                "sound": "Moo"
            });
        }
        return animals;
    }
    // if there is no entry for animals in local storage
    if (!localStorage.getItem('animals')) {
        // create a new entry in local storage and put an empty array in it        
        localStorage.setItem('animals', JSON.stringify([]));
    }
}

/*
 *
 */
AnimalService.prototype.getAnimals = function () {
    return JSON.parse(localStorage.getItem('animals'));
}

AnimalService.prototype.getAnimalPage = function (pagination) {
    const animals = this.getAnimals();
    const start = pagination.pageNumber * pagination.pageSize;
    const end = start + pagination.pageSize;
    return {
        pagination,
        records: animals.slice(start, end)
    };
}

/*
 *
 */
AnimalService.prototype.saveAnimal = function (animal) {
    const animals = this.getAnimals();
    if (animals.find(a => a.name == animal.name)) {
        throw new Error('An animal with that name already exists!');
    }
    animals.push(animal);
    localStorage.setItem('animals', JSON.stringify(animals));
    return true;
}

/*
 *
 */
AnimalService.prototype.findAnimal = function (animalName) {
    const animals = this.getAnimals();
    const animal = animals.find(a => a.name === animalName);
    if (!animal) {
        throw new Error('Animal not found!');
    }
    return animal;
=======
    Name: Amith Pappachen Sajan
    filename: animal.service.mock.js
    Course: INFT 2202
    Date: 10th jan 2025
    Description: This is my general application script.  Functions that are required on every page should live here.
*/
/*
 *  Service constructor
 */
function AnimalService() {
    // if there is no entry for animals in local storage
    if (!localStorage.getItem('animals')) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage  
        // create a new entry in local storage and put an empty array in it
        localStorage.setItem('animals', JSON.stringify([]))
    }    
}
/*
 *
 */
AnimalService.prototype.getAnimals = function() {
    // this will always be set, because we did it in the constructor
    return JSON.parse(localStorage.getItem('animals'));
}
/*
 *
 */
AnimalService.prototype.saveAnimal = function(animal) {
    // get a list of animals
    const animals = this.getAnimals();
    // see if this animal already exists
    if (animals.find(a => a.name == animal.name)) {
        // tell the caller we're not going to save this
        throw new Error('An animal with that name already exists!');
    }
    // if it doesn't, add it to the array
    animals.push(animal);
    // and save it in storage again
    localStorage.setItem('animals', JSON.stringify(animals));
    // tell the caller all was well
    return true;
}
/*
 *
 */
AnimalService.prototype.findAnimal = function(animalName) {
    return null;
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
}

/*
 *
 */
<<<<<<< HEAD
AnimalService.prototype.updateAnimal = function (animal) {
    const animals = this.getAnimals();
    const idx = animals.findIndex(a => a.name === animal.name);
    if (idx === -1) {
        throw new Error('That animal does not exist!');
    }
    animals[idx] = animal; // Update the animal
    localStorage.setItem('animals', JSON.stringify(animals));
    return true;
=======
AnimalService.prototype.updateAnimal = function(animal) {

    return false;
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
}

/*
 *
 */
<<<<<<< HEAD
AnimalService.prototype.deleteAnimal = function (animal) {
=======
AnimalService.prototype.deleteAnimal = function(animal) {
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
    const animals = this.getAnimals();
    const idx = animals.findIndex(a => a.name == animal.name);
    if (idx === -1) {
        throw new Error('That animal does not exist!');
    }
    animals.splice(idx, 1);
    localStorage.setItem('animals', JSON.stringify(animals));
    return true;
}

<<<<<<< HEAD
const animalService = new AnimalService();
=======
const animalService = new AnimalService();
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
