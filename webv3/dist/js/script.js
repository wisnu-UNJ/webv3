const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Network Engineer", "DevOps Engineer"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // typing speed
  } else {
    setTimeout(erase, 2000); // delay before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, 50); // erasing speed
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 500); // delay before typing next
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
