<<<<<<< HEAD
import animalService from "./animal.service.mock.js";
function animal() {
    const form = document.createElement('form');
    let description = 'Add Animal';
    function createContent() {
        const container = document.createElement('div');
        container.classList.add('mb-2');
        //create animal form content
        const mb3Name = document.createElement('div');
        mb3Name.classList.add('mb-3');
        mb3Name.innerHTML = '<label for="name" class="form-label">Animal Name</label>' +
            '<input type="text" class="form-control" id="name" name="name">' +
            '<p class="text-danger d-none"></p>';
        container.append(mb3Name);

        const mb3Breed = document.createElement('div');
        mb3Breed.classList.add('mb-3');
        mb3Breed.innerHTML = '<label for="breed" class="form-label">Animal Breed</label>' +
            '<input type="text" class="form-control" id="breed" name="breed">' +
            '<p class="text-danger d-none"></p>';
        container.append(mb3Breed);
        
        const mb3Leg = document.createElement('div');
        mb3Leg.classList.add('mb-3');
        mb3Leg.innerHTML = '<label for="legs" class="form-label">Number of Legs</label>' +
            '<input type="text" class="form-control" id="legs" name="legs">' +
            '<p class="text-danger d-none"></p>';
        container.append(mb3Leg);
        
        const mb3Eye = document.createElement('div');
        mb3Eye.classList.add('mb-3');
        mb3Eye.innerHTML = '<label for="eyes" class="form-label">Number of Eyes</label>' +
            '<input type="text" class="form-control" id="eyes" name="eyes">' +
            '<p class="text-danger d-none"></p>';
        container.append(mb3Eye);
        
        const mb3Sound = document.createElement('div');
        mb3Sound.classList.add('mb-3');
        mb3Sound.innerHTML = '<label for="sound" class="form-label">Sound this animal makes</label>' +
            '<input type="text" class="form-control" id="sound" name="sound">' +
            '<p class="text-danger d-none"></p>';
        container.append(mb3Sound);        

        const submitBtn = document.createElement('div');
        submitBtn.innerHTML = '<button type="submit" class="btn btn-primary">' +
            'Save Animal <i class="fa-solid fa-check"></i>' +
            '</button>';
        container.append(submitBtn);        
        ///
        form.append(container);
        return form;
    }
    function validate() {
        let valid = true;
        // validate form
        // test that name is valid
        const name = form.name.value;
        const eleNameError = form.name.nextElementSibling

        if (name == "") {
            eleNameError.classList.remove('d-none');
            eleNameError.textContent = "You must name this animal!";
            valid = false;
        } else {
            eleNameError.classList.add('d-none');
        }

        // test that breed is valid
        const breed = form.breed.value;
        const eleBreedError = form.breed.nextElementSibling
        if (breed == "") {
            eleBreedError.classList.remove('d-none');
            eleBreedError.textContent = "What type of animal is this?";
            valid = false;
        } else {
            eleBreedError.classList.add('d-none');
        }

        const legs = form.legs.value;
        const eleLegsError = form.legs.nextElementSibling
        if (legs == "") {
            eleLegsError.classList.remove('d-none');
            eleLegsError.textContent = "How many legs does this animal have?";
            valid = false;
        } else if (isNaN(legs)) {
            eleLegsError.classList.remove('d-none');
            eleLegsError.textContent = "This must be a number.";
            valid = false;
        } else {
            eleLegsError.classList.add('d-none');
        }

        const eyes = form.eyes.value; // check that these are numbers
        const sound = form.sound.value;
        // return if the form is valid or not
        return valid
    }    
    // create a handler to deal with the submit event
    function submit() {
        // validate the form
        const valid = validate();
        // do stuff if the form is valid
        if (valid) {
            console.log('were good');

            const formData = new FormData(form);
            const animalObject = {};
            formData.forEach((value, key) => {
                if (key === 'eyes' || key === 'legs') {
                    animalObject[key] = Number(value);
                }
                else {
                    animalObject[key] = value;
                }
            });

            const eleNameError = form.name.nextElementSibling
            try {
                animalService.saveAnimal(animalObject);
                eleNameError.classList.add('d-none');
                form.reset();
                window.location = './list.html';
            } catch (error) {
                console.log(error);
                eleNameError.classList.remove('d-none');
                eleNameError.textContent = "This animal already exists!";
            }
            // do nothing if it's not
        } else {
            console.log('were not good');
        }
    }
    
    // assign a handler to the submit event
    form.addEventListener('submit', function (event) {
        // prevent the default action from happening
        event.preventDefault();
        submit();
    });
    
    return {
        description,
        element: createContent()
    }
}

export default animal;
=======
// Import animalService (mocked service for now)
import animalService from "./animal.service.mock.js";

function animal() {
    const form = document.createElement('form');
    let description = 'Add Animal';

    // Create content for the form
    function createContent() {
        const container = document.createElement('div');
        container.classList.add('mb-2');

        // Add input fields for the form
        const fields = [
            { id: 'name', label: 'Animal Name' },
            { id: 'breed', label: 'Animal Breed' },
            { id: 'legs', label: 'Number of Legs' },
            { id: 'eyes', label: 'Number of Eyes' },
            { id: 'sound', label: 'Sound this animal makes' }
        ];

        fields.forEach(field => {
            const fieldDiv = document.createElement('div');
            fieldDiv.classList.add('mb-3');

            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.classList.add('form-label');
            label.textContent = field.label;

            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.id);
            input.classList.add('form-control');

            const error = document.createElement('p');
            error.classList.add('text-danger', 'd-none');
            error.textContent = 'This field is required';

            fieldDiv.appendChild(label);
            fieldDiv.appendChild(input);
            fieldDiv.appendChild(error);

            container.appendChild(fieldDiv);
        });

        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.classList.add('btn', 'btn-primary');
        submitButton.textContent = 'Save Animal';

        container.appendChild(submitButton);
        form.appendChild(container);

        return form;
    }

    // Form validation logic
    function validate() {
        let valid = true;
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            const error = input.nextElementSibling;
            if (!input.value.trim()) {
                error.classList.remove('d-none');
                valid = false;
            } else {
                error.classList.add('d-none');
            }
        });
        return valid;
    }

    // Form submission handler
    function submit() {
        if (validate()) {
            const animalData = {
                name: form.querySelector('#name').value.trim(),
                breed: form.querySelector('#breed').value.trim(),
                legs: form.querySelector('#legs').value.trim(),
                eyes: form.querySelector('#eyes').value.trim(),
                sound: form.querySelector('#sound').value.trim(),
            };

            // Save animal data using the animal service (mocked for now)
            animalService
                .addAnimal(animalData)
                .then(response => {
                    alert('Animal added successfully!');
                    form.reset(); // Clear the form after successful submission
                })
                .catch(error => {
                    console.error('Error adding animal:', error);
                    alert('Failed to add the animal. Please try again.');
                });
        }
    }

    // Assign handler to the submit event
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        submit();
    });

    return {
        description,
        element: createContent()
    };
}

export default animal;
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
