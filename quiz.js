// Function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if a radio button is selected
    if (userAnswer) {
        // Compare user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose one
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
    if (userAnswer) {
        // Compare user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose one
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
