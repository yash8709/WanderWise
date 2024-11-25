// script.js

document.getElementById('hotelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Searching for hotels...');
});

document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Searching for flights...');
});

document.getElementById('cabForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking cab...');
});
