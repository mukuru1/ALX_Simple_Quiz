/*************  ✨ Codeium Command 🌟  *************/
// Function to check the user's answer
function checkanswer() {
    // The correct answer for the quiz
    const correctanswer = "4";
    const useranswer = document.querySelector('input[name="quiz"][value="' + correctanswer + '"]:checked');
    
    // Retrieve the user's selected answer
    const useranswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    feedbackElement.textContent =
        useranswer ? correctanswer === useranswer.value ? "Correct! Well done." : "That's incorrect. Try again!" : "Please select an answer before submitting.";
    // Check if a radio button is selected
    if (useranswer) {
        // Compare user's answer to the correct answer
        if (useranswer.value === correctanswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose one
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
}
/******  4127fc2d-a53a-4139-be8e-3c1d26df0fb2  *******/

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
