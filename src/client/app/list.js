/*
    Name: Amith Pappachen Sajan
    filename: app.js
    Course: INFT 2202
    Date: 10th jan 2025
    Description: This is my general application script.  Functions that are required on every page should live here.
*/

import { getAnimals } from './animals.service.js'; // Assuming this service provides animal data

window.addEventListener('DOMContentLoaded', () => {
  const messageBox = document.getElementById('message-box');
  const animalsTable = document.getElementById('animals-list');
  const tableBody = animalsTable.querySelector('tbody');

  function drawAnimalsTable(animals) {
    // Check if there are any animals
    if (animals.length > 0) {
      messageBox.classList.add('d-none');
      animalsTable.classList.remove('d-none');

      // Populate the table
      animals.forEach((animal) => {
        const row = tableBody.insertRow();

        // Owner column
        const ownerCell = row.insertCell();
        ownerCell.textContent = animal.owner;

        // Details column
        const detailsCell = row.insertCell();
        detailsCell.textContent = animal.details;

        // Controls column
        const controlsCell = row.insertCell();

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-sm', 'btn-primary', 'me-2');
        editButton.addEventListener('click', () => {
          alert(`Edit animal: ${animal.details}`);
        });
        controlsCell.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-sm', 'btn-danger');
        deleteButton.addEventListener('click', () => {
          alert(`Delete animal: ${animal.details}`);
        });
        controlsCell.appendChild(deleteButton);
      });
    } else {
      // No animals, show the message box
      animalsTable.classList.add('d-none');
      messageBox.classList.remove('d-none');
    }
  }

  // Get animals from the service and draw the table
  getAnimals().then((animals) => {
    drawAnimalsTable(animals);
  });
});
