/*
    Name: Amith Pappachen Sajan
    filename: app.js
    Course: INFT 2202
    Date: 10th jan 2025
    Description: This is my general application script.  Functions that are required on every page should live here.
*/
export function getAnimals() {
    // Simulated API response
    return Promise.resolve([
      { owner: 'John Doe', details: 'Dog - Labrador' },
      { owner: 'Jane Smith', details: 'Cat - Siamese' },
    ]);
  }
  