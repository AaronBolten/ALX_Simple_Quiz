function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedbackDiv = document.getElementById("feedback");

    if (!selectedOption) {
        feedbackDiv.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done.";
    } else {
        feedbackDiv.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
