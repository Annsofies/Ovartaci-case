"use strict";

// ALIAS - touch keyboard

// Henter inputfeltet hvor navnet bliver vist
const input = document.getElementById("nameInput");

// Henter alle bogstav-knapper
const keys = document.querySelectorAll(".key");

// Henter special-knapperne på keyboardet
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const shift = document.getElementById("shift");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// Holder styr på om bogstaverne er store eller små
let isUpperCase = true;

// Holder styr på hvor i teksten brugeren skriver
let cursorPosition = 0;

// Sætter cursoren til slutningen af inputfeltet
function updateCursorToEnd() {
  cursorPosition = input.value.length;
}

// Nulstiller aliasfeltet og keyboardet
function resetAliasForm() {
  input.value = "";
  cursorPosition = 0;
  isUpperCase = true;

  // Sætter alle bogstaver tilbage til store bogstaver
  keys.forEach((key) => {
    key.textContent = key.textContent.toUpperCase();
  });
}

// Indsætter tekst dér hvor cursoren står
function insertAtCursor(text) {
  const currentText = input.value;

  // Stopper hvis max længde er nået
  if (currentText.length >= input.maxLength) return;

  const beforeCursor = currentText.slice(0, cursorPosition);
  const afterCursor = currentText.slice(cursorPosition);

  input.value = beforeCursor + text + afterCursor;
  cursorPosition += text.length;
}

// Gør alle bogstav-knapper klikbare
keys.forEach((key) => {
  key.addEventListener("click", () => {
    insertAtCursor(key.textContent);
  });
});

// Sletter bogstavet før cursoren
backspace.addEventListener("click", () => {
  if (cursorPosition > 0) {
    const currentText = input.value;
    const beforeCursor = currentText.slice(0, cursorPosition - 1);
    const afterCursor = currentText.slice(cursorPosition);

    input.value = beforeCursor + afterCursor;
    cursorPosition--;
  }
});

// Indsætter mellemrum
space.addEventListener("click", () => {
  insertAtCursor(" ");
});

// Flytter cursoren mod venstre
leftArrow.addEventListener("click", () => {
  if (cursorPosition > 0) {
    cursorPosition--;
  }
});

// Flytter cursoren mod højre
rightArrow.addEventListener("click", () => {
  if (cursorPosition < input.value.length) {
    cursorPosition++;
  }
});

// Skifter mellem store og små bogstaver
shift.addEventListener("click", () => {
  isUpperCase = !isUpperCase;

  keys.forEach((key) => {
    key.textContent = isUpperCase
      ? key.textContent.toUpperCase()
      : key.textContent.toLowerCase();
  });
});

// Gør funktionerne tilgængelige for script.js
window.updateAliasCursorToEnd = updateCursorToEnd;
window.resetAliasForm = resetAliasForm;