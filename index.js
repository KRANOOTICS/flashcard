const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const cardNumberElement = document.getElementById('cardNumber');
const redoBtn = document.getElementById('redoBtn');
const flashcards = [
{ question: "Which planet is closest to the Sun?", answer: "Mercury" },
{ question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
{ question: "What is the capital of Japan?", answer: "Tokyo" },
{ question: "How many continents are there?", answer: "7" },
{ question: "Which ocean is the largest?", answer: "Pacific" },
{ question: "Who is known as the father of modern physics?", answer:
"Einstein" },
{ question: "What is the longest river in the world?", answer: "Nile" },
{ question: "Which country has the largest population?", answer: "China" },
{ question: "What is the capital of Australia?", answer: "Canberra" },
{ question: "Who discovered gravity?", answer: "Isaac Newton" },
{ question: "Which element has the chemical symbol O?", answer: "Oxygen" },
{ question: "What is the largest planet in our solar system?", answer:
"Jupiter" },
{ question: "Who was the first president of the United States?", answer:
"George Washington" },
{ question: "What is the tallest mountain in the world?", answer: "Mount
Everest" },
{ question: "What is the currency of Japan?", answer: "Yen" },
{ question: "Who was the first man on the moon?", answer: "Neil Armstrong"
},
{ question: "What is the main ingredient in guacamole?", answer: "Avocado"
},
{ question: "What gas do plants absorb from the atmosphere?", answer:
"Carbon dioxide" },
{ question: "Which animal is known as the king of the jungle?", answer:
"Lion" },
{ question: "What is the capital of Canada?", answer: "Ottawa" },
{ question: "What is the largest desert in the world?", answer: "Sahara" },
{ question: "Which language is primarily spoken in Brazil?", answer:
"Portuguese" },
{ question: "What is the smallest country in the world?", answer: "Vatican
City" },
{ question: "Which continent is known as the frozen continent?", answer:
"Antarctica" },
{ question: "What is the hardest natural substance on Earth?", answer:
"Diamond" },

{ question: "Who invented the telephone?", answer: "Alexander Graham Bell" }
];
const lightColors = ["#d0f0c0", "#f0f8ff", "#fdf5e6", "#f0fff0", "#f8f9fa"];
let shuffled, currentCard, score;
function initializeQuiz() {
shuffled = flashcards.sort(() => Math.random() - 0.5).slice(0, 5); //
Randomly pick 5 cards
currentCard = 0;
score = 0;
document.body.style.backgroundColor = lightColors[0];
answerInput.style.display = "inline-block";
submitBtn.style.display = "inline-block";
redoBtn.style.display = "none";
nextBtn.style.display = "none";
scoreElement.textContent = "";
loadCard();
}
function loadCard() {
const card = shuffled[currentCard];
questionElement.textContent = card.question;
cardNumberElement.textContent = `Flashcard ${currentCard + 1} of
${shuffled.length}`;
answerInput.value = "";
resultElement.textContent = "";
resultElement.style.color = "black";
nextBtn.style.display = "none";
submitBtn.disabled = false;
answerInput.disabled = false;
document.body.style.backgroundColor = lightColors[currentCard %
lightColors.length];
}
submitBtn.addEventListener('click', () => {
const userAnswer = answerInput.value.trim().toLowerCase();
const correctAnswer = shuffled[currentCard].answer.toLowerCase();
if (userAnswer === correctAnswer) {
resultElement.textContent = "✅ Correct!";
resultElement.style.color = "green";
score++;
} else {
resultElement.textContent = `❌ Wrong! Correct answer:
${shuffled[currentCard].answer}`;
resultElement.style.color = "red";

}
submitBtn.disabled = true;
answerInput.disabled = true;
nextBtn.style.display = "inline-block";
});
nextBtn.addEventListener('click', () => {
currentCard++;
if (currentCard < shuffled.length) {
loadCard();
} else {
questionElement.textContent = "🎉 Quiz Completed!";
answerInput.style.display = "none";
submitBtn.style.display = "none";
nextBtn.style.display = "none";
cardNumberElement.textContent = "";
scoreElement.textContent = `You got ${score} out of ${shuffled.length}
correct!`;
redoBtn.style.display = "inline-block";
}
});
redoBtn.addEventListener('click', initializeQuiz);
initializeQuiz();