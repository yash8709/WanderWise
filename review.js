// scripts.js

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to keep the page from reloading

    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Feedback message element
    const feedbackMessage = document.getElementById('feedback-message');

    // Basic validation
    if (!name || !rating || !review) {
        feedbackMessage.textContent = "Please fill in all fields.";
        feedbackMessage.classList.add('error');
        return;
    }

    // Create review object
    const newReview = {
        name: name,
        rating: rating,
        review: review
    };

    // Add the new review to the reviews list (this would normally be saved to a database)
    displayReview(newReview);

    // Show success message
    feedbackMessage.textContent = `Thank you, ${name}! Your review has been submitted successfully.`;
    feedbackMessage.classList.remove('error');

    // Clear the form after successful submission
    document.getElementById('review-form').reset();
});

// Function to display a review
function displayReview(review) {
    const reviewsList = document.getElementById('reviews-list');

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    // Create review HTML structure
    reviewItem.innerHTML = `
        <h4>${review.name}</h4>
        <div class="rating">Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        <p>${review.review}</p>
    `;

    // Append to the reviews list
    reviewsList.appendChild(reviewItem);
}
