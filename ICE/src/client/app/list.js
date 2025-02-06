<<<<<<< HEAD

console.log('we are on the list page');
const entriesPerPage = 3; // Change this value to set entries per page
let currentPage = 1;
/* do table stuff */
const eleEmpty = document.getElementById('empty-message');
const eleTable = document.getElementById('animal-list');

const records = animalService.getAnimals();

if (!records.length) {
    eleEmpty.classList.remove('d-none');
    eleTable.classList.add('d-none');
} else {
    eleEmpty.classList.add('d-none');
    eleTable.classList.remove('d-none');
    drawAnimalTable(records);
}
/* 
 * 
 */


function drawAnimalTable(animals) {
    const totalPages = Math.ceil(animals.length / entriesPerPage);
    const start = (currentPage - 1) * entriesPerPage;
    const end = start + entriesPerPage;
    const paginatedAnimals = animals.slice(start, end);

    const tbody = eleTable.querySelector('tbody');
    tbody.innerHTML = ''; // Clear previous entries

    for (let animal of paginatedAnimals) {
        const row = tbody.insertRow();
        row.insertCell().textContent = animal.name;
        row.insertCell().textContent = animal.breed;
        row.insertCell().textContent = animal.legs;
        row.insertCell().textContent = animal.eyes;
        row.insertCell().textContent = animal.sound;

        const eleBtnCell = row.insertCell();
        
        const eleBtnDelete = document.createElement('button');
        eleBtnDelete.classList.add('btn', 'btn-danger', 'mx-1');
        eleBtnDelete.innerHTML = `<i class="fa fa-trash"></i>`;
        eleBtnDelete.addEventListener('click', onDeleteButtonClick(animal));
        eleBtnCell.append(eleBtnDelete);

        const eleBtnEdit = document.createElement('a');
        eleBtnEdit.classList.add('btn', 'btn-primary', 'mx-1');
        eleBtnEdit.innerHTML = `<i class="fa fa-user"></i>`;
        eleBtnEdit.href = `./add.html?name=${animal.name}`;
        eleBtnCell.append(eleBtnEdit);
    }

    drawPagination(totalPages);
}

function drawPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear previous pagination

    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        currentPage--;
        drawAnimalTable(records);
    });
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.innerText = i;
        pageBtn.disabled = i === currentPage;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            drawAnimalTable(records);
        });
        paginationContainer.appendChild(pageBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        currentPage++;
        drawAnimalTable(records);
    });
    paginationContainer.appendChild(nextBtn);
}

function onDeleteButtonClick(animal) {
    return event => {
        animalService.deleteAnimal(animal);
        window.location.reload();
    }
}

function onEditButtonClick(animal) {
    return event => {
        animalService.updateAnimal(animal);
    }
}
=======
/*
    Name: Amith Pappachen Sajan
    filename: list.js
    Course: INFT 2202
    Date: 10th jan 2025
    Description: This is my general application script.  Functions that are required on every page should live here.
*/
// app/list.js

// app/list.js

import { getAnimals } from './animals.service.js';

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const animalsListTable = document.getElementById('animals-list');
    const tableBody = animalsListTable.querySelector('tbody');

    // Fetch and display the list of animals
    getAnimals().then(drawAnimalsTable);

    function drawAnimalsTable(animals) {
        if (animals.length > 0) {
            // Hide the message box and show the table
            messageBox.classList.add('d-none');
            animalsListTable.classList.remove('d-none');

            // Add rows for each animal
            animals.forEach(animal => {
                const row = tableBody.insertRow();

                // Add Owner cell
                const ownerCell = row.insertCell();
                ownerCell.textContent = animal.owner;

                // Add Details cell
                const detailsCell = row.insertCell();
                detailsCell.textContent = `${animal.breed}, ${animal.name}`;

                // Add Controls cell
                const controlsCell = row.insertCell();
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.className = 'btn btn-warning btn-sm me-2';
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'btn btn-danger btn-sm';
                controlsCell.append(editButton, deleteButton);
            });
        } else {
            // Show the message box and hide the table
            messageBox.classList.remove('d-none');
            animalsListTable.classList.add('d-none');
        }
    }
});
>>>>>>> f6064627f6a93b45caabd9a14d961006ddd2a2a1
