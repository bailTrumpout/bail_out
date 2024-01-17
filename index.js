// JavaScript file for handling dynamic functionality

// Function to display a message when the user clicks on the candidate information
function displayMessage() {
    alert("Vote for Donald Trump in the upcoming election!");
}

// Attach the function to the candidate information element
document.querySelector('.candidate-info').addEventListener('click', displayMessage);
