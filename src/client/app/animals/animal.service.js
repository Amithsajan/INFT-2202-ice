
function AnimalService() {
    // if there is no entry for animals in local storage
    if (!localStorage.getItem('animals')) {
        // create a new entry in local storage and put an empty array in it
        localStorage.setItem('animals', JSON.stringify([]))
    }
}


AnimalService.prototype.getAnimals = function() {
    // this will always be set, because we did it in the constructor
    return JSON.parse(localStorage.getItem('animals'));
}



AnimalService.prototype.saveAnimal = function(animal) {

    const animals = this.getAnimals();

    if (animals.find(a => a.name == animal.name)) {
       
        throw new Error('An animal with that name already exists!');
    }

    animals.push(animal);
  
    localStorage.setItem('animals', JSON.stringify(animals));
    // tell the caller all was well
    return true;
}

/*
 *
 */
AnimalService.prototype.findAnimal = function(animalName) {
    const animals = this.getAnimals();
    const animal = animals.find(a => a.name == animalName);
    if (!animal) {
        throw new Error('That animal does not exist!');
    }
    return animal;
}

/*
 *
 */
AnimalService.prototype.updateAnimal = function(animal) {
    const animals = this.getAnimals();
    const idx = animals.findIndex(a => a.name == animal.name);
    if (idx === -1) {
        throw new Error('That animal does not exist!');
    }
    animals[idx] = animal;
    localStorage.setItem('animals', JSON.stringify(animals));
    return true;
}

/*
 *
 */
AnimalService.prototype.deleteAnimal = function(animal) {
    const animals = this.getAnimals();
    const idx = animals.findIndex(a => a.name == animal.name);
    if (idx === -1) {
        throw new Error('That animal does not exist!');
    }
    animals.splice(idx, 1);
    localStorage.setItem('animals', JSON.stringify(animals));
    return true;
}

export default new AnimalService();