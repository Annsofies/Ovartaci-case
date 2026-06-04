"use strict";

// Alle quiz spørgsmål, svar, billeder, feedback og reflektion
const questions = [
  {
    chapter: "Identitet",
    question: "Hvad betyder navnet “Ovartaci”?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    image: "img/ovi-hehe.png",

    // Feedback efter spørgsmålet
    feedback:
      "Navnet Ovartaci forbindes med ordet “overtosse” og blev en vigtig del af kunstnerens identitet og særlige univers.",

    // Lille refleksion til brugeren
    reflection: "Hvordan tror du et navn kan påvirke et menneskes identitet?",
  },

  {
    chapter: "Indre univers",
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    image: "img/identitet.png",

    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis kunst og fortællinger.",
  },

  {
    chapter: "Stedet",
    question: "Hvor skabte Ovartaci størstedelen af sin kunst?",
    answers: [
      "På kunstakademiet i København",
      "På Psykiatrisk Hospital i Risskov",
      "På et museum i Paris",
    ],
    correctIndex: 1,
    image: "img/risskovhospital.png",

    feedback:
      "På Psykiatrisk Hospital i Risskov skabte Ovartaci størstedelen af sine værker og udviklede sit særlige kunstneriske univers.",
  },

  {
    chapter: "Livsfortælling",
    question:
      "Hvor længe var Ovartaci indlagt på Psykiatrisk Hospital i Risskov?",

    answers: ["12 år", "24 år", "56 år"],

    correctIndex: 2,

    image: "img/kvinde.png",

    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov, hvor han både boede og arbejdede med sin kunst.",

    reflection:
      "Hvordan tror du det påvirker et menneske at opholde sig samme sted i mange år?",
  },

  {
    chapter: "Håndværk",

    question:
      "Hvad arbejdede Louis Marcussen som, før han blev kendt som Ovartaci?",

    answers: ["Bygningsmaler", "Håndværker", "Sømand"],

    correctIndex: 0,

    image: "img/ovi-smile.png",

    feedback:
      "Før han blev kendt som Ovartaci, arbejdede Louis Marcussen med maling og dekoration som bygningsmaler.",
  },

  {
    chapter: "Rum og regler",

    question:
      "Hvorfor lavede Ovartaci hængedukker i stedet for at male direkte på væggene?",

    answers: [
      "Fordi han ikke måtte male direkte på væggene",
      "Fordi han ikke kunne lide maling",
      "Fordi væggene var for små",
    ],

    correctIndex: 0,

    image: "img/haengedukke.png",

    feedback:
      "Derfor fandt Ovartaci en kreativ løsning ved at lave bevægelige papirdukker, som kunne hænges op i rummet.",
  },

  {
    chapter: "Frihed",

    question: "Hvad drømte Ovartaci om at bygge?",

    answers: ["En helikopter", "Et slot", "En ubåd"],

    correctIndex: 0,

    image: "img/ovi-og-figur.png",

    // Andet feedback billede end spørgsmålet
    feedbackImage: "img/helikopter.png",

    feedback:
      "Ovartaci byggede en helikopter i fuld størrelse, men den kom aldrig til at flyve. Projektet viser hans store fantasi og fascination af teknik og frihed.",

    reflection: "Hvad tror du drømmen om at flyve symboliserede for Ovartaci?",
  },

  {
    chapter: "Objekter",

    question: "Hvordan blev Ovartacis “rygefantomer” brugt?",

    answers: ["Som legetøj", "Til at ryge gennem", "Som lamper"],

    correctIndex: 1,

    image: "img/rygefantomer.png",

    feedback:
      "Tobakken blev placeret i figurens hoved, mens røgen blev suget gennem benene og fødderne.",
  },

  {
    chapter: "Bevægelse",

    question: "Hvad blev et vigtigt symbol på frihed for Ovartaci?",

    answers: ["En cykel", "Et tog", "En båd"],

    correctIndex: 0,

    image: "img/vaerk.png",

    feedbackImage: "img/cykel.png",

    feedback:
      "At kunne cykle rundt gav Ovartaci en følelse af frihed og selvstændighed.",
  },

  {
    chapter: "Transformation",

    question:
      "I 1954 amputerede Ovartaci sin penis. Hvad gjorde han efter amputationen?",

    answers: [
      "Han gemte den i en kasse",
      "Han dyppede den i rød maling og smed den væk",
      "Han afleverede den til lægerne",
    ],

    correctIndex: 1,

    image: "img/amputation.png",

    feedback:
      "Ovartaci dyppede den i rød maling for at sikre, at lægerne ikke kunne sy den på igen. Episoden viser, hvor stærkt han ønskede fysisk og psykisk forvandling.",
  },

  {
    chapter: "Kunst og fortælling",

    question: "Hvad ønskede Ovartaci især at udtrykke gennem sin kunst?",

    answers: ["At blive berømt", "At male realistisk", "Sit indre univers"],

    correctIndex: 2,

    image: "img/univers.png",

    feedback:
      "Kunsten blev en måde for Ovartaci at udtrykke tanker, følelser, fantasi og identitet på.",

    reflection: "Hvad kan kunst fortælle, som ord nogle gange ikke kan?",
  },
];

// Samler alle screens ét sted
const screens = {
  start: document.querySelector("#startScreen"),
  alias: document.querySelector("#aliasScreen"),
  quiz: document.querySelector("#quizScreen"),
  feedback: document.querySelector("#feedbackScreen"),
  score: document.querySelector("#scoreScreen"),
};

// Knapper
const startBtn = document.querySelector("#startBtn");
const saveNameBtn = document.querySelector("#saveNameBtn");
const nextBtn = document.querySelector("#nextBtn");
const restartBtn = document.querySelector("#restartBtn");

// Alias input og fejltekst
const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");

// Progressbar og tællere
const questionCounter = document.querySelector("#questionCounter");
const feedbackCounter = document.querySelector("#feedbackCounter");
const progressBar = document.querySelector("#progressBar");
const feedbackProgressBar = document.querySelector("#feedbackProgressBar");

// Quiz indhold
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const answersContainer = document.querySelector("#answers");
const submitAnswerBtn = document.querySelector("#submitAnswerBtn");

// Feedback indhold
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const correctAnswerText = document.querySelector("#correctAnswerText");
const feedbackImage = document.querySelector("#feedbackImage");
const reflectionText = document.querySelector("#reflectionText");

// Scoreboard
const finalScore = document.querySelector("#finalScore");
const scoreList = document.querySelector("#scoreList");

// Holder styr på quizzen
let currentQuestionIndex = 0;
let score = 0;

// Henter tidligere gemt navn fra localStorage
let playerName = localStorage.getItem("ovartaciPlayerName") || "";

// Skifter mellem screens
function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    if (screen) screen.classList.remove("active");
  });

  if (screens[screenName]) {
    screens[screenName].classList.add("active");
  }
}

// Opdaterer progressbar og spørgsmålsnummer
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;
  feedbackProgressBar.style.width = `${progress}%`;

  questionCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1}/${questions.length}`;

  feedbackCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1}/${questions.length}`;
}

// Viser nyt spørgsmål
function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  updateProgress();

  questionText.textContent = currentQuestion.question;

  questionImage.src = currentQuestion.image;

  // Viser feedback billede hvis det findes
  feedbackImage.src = currentQuestion.feedbackImage || currentQuestion.image;

  answersContainer.innerHTML = "";

  let selectedIndex = null;

  submitAnswerBtn.disabled = true;

  // Laver svarmuligheder dynamisk
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      // Fjerner tidligere markering
      document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });

      // Marker valgt svar
      button.classList.add("selected");

      selectedIndex = index;

      // Aktiverer pilen
      submitAnswerBtn.disabled = false;
    });

    answersContainer.appendChild(button);
  });

  // Bekræfter svaret
  submitAnswerBtn.onclick = () => {
    if (selectedIndex !== null) {
      handleAnswer(selectedIndex);
    }
  };

  showScreen("quiz");
}

// Håndterer svaret
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  // Giver point hvis svaret er korrekt
  if (isCorrect) {
    score += 1;
  }

  // Tilføjer styling til feedback screen
  screens.feedback.classList.toggle("correct", isCorrect);

  screens.feedback.classList.toggle("wrong", !isCorrect);

  // Feedback titel
  feedbackTitle.textContent = isCorrect ? "Korrekt!" : "Forkert!";

  // Forklaring
  feedbackText.textContent = currentQuestion.feedback;

  // Viser det rigtige svar
  correctAnswerText.textContent = `Rigtigt svar: ${
    currentQuestion.answers[currentQuestion.correctIndex]
  }`;

  const reflectionCard = document.querySelector(".reflection-card");

  // Viser refleksion hvis spørgsmålet har en
  if (currentQuestion.reflection) {
    reflectionCard.style.display = "block";

    reflectionText.textContent = currentQuestion.reflection;
  } else {
    reflectionCard.style.display = "none";
  }

  // Vis feedback screen
  showScreen("feedback");
}

// Går videre til næste spørgsmål
function nextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
    return;
  }

  // Gemmer score og viser scoreboard
  saveScore();
  renderScoreboard();

  showScreen("score");
}

// Gemmer score i localStorage
function saveScore() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];

  scores.push({
    name: playerName,
    score,
    total: questions.length,
    date: new Date().toISOString(),
  });

  // Sorterer højeste score først
  scores.sort((a, b) => b.score - a.score);

  localStorage.setItem("ovartaciScores", JSON.stringify(scores.slice(0, 8)));
}

// Viser scoreboard
function renderScoreboard() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];

  finalScore.textContent = `${playerName}, du fik ${score}/${questions.length} rigtige.`;

  scoreList.innerHTML = "";

  scores.forEach((entry) => {
    const li = document.createElement("li");

    li.innerHTML = `<span>${entry.name}</span><span>${entry.score}/${entry.total}</span>`;

    scoreList.appendChild(li);
  });
}

// Starter quizzen forfra
function startNewQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  renderQuestion();
}

// Start knap
startBtn.addEventListener("click", () => {
  // Nulstiller keyboard hvis funktionen findes
  if (window.resetAliasForm) {
    window.resetAliasForm();
  }

  playerName = "";

  localStorage.removeItem("ovartaciPlayerName");

  nameError.textContent = "";

  showScreen("alias");

  nameInput.focus();
});

// Gemmer navn og starter quiz
saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  // Tjekker om navnet er langt nok
  if (name.length < 2) {
    nameError.textContent = "Skriv mindst 2 tegn.";
    return;
  }

  nameError.textContent = "";

  playerName = name;

  localStorage.setItem("ovartaciPlayerName", playerName);

  startNewQuiz();
});

// Starter quiz ved Enter
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveNameBtn.click();
  }
});

// Næste spørgsmål
nextBtn.addEventListener("click", nextQuestion);

// Starter oplevelsen forfra
restartBtn.addEventListener("click", () => {
  // Nulstiller keyboard
  if (window.resetAliasForm) {
    window.resetAliasForm();
  }

  playerName = "";

  localStorage.removeItem("ovartaciPlayerName");

  nameError.textContent = "";

  showScreen("start");
});

// Baggrundsvideo på startsiden
const backgroundVideo = document.querySelector(".background-video");

// Starter video igen efter pause
backgroundVideo.addEventListener("ended", () => {
  setTimeout(() => {
    backgroundVideo.currentTime = 0;
    backgroundVideo.play();
  }, 6000);
});
