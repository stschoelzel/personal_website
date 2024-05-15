// Zuordnung von Tastencode zu Tastenbezeichnung
var allowedKeys = {
  37: "left", // Pfeiltaste links
  38: "up", // Pfeiltaste hoch
  39: "right", // Pfeiltaste rechts
  40: "down", // Pfeiltaste runter
  65: "a", // Taste A
  66: "b", // Taste B
};

// Konami-Code-Sequenz
var konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
];
var konamiCodePosition = 0; // Position im Konami-Code

// Sexting-Code-Sequenz
var sextingCode = ["up", "up", "up", "a", "a"];
var sextingCodePosition = 0; // Position im Sexting-Code

// Event-Listener für Tastendruck (gemeinsam für beide Codes)
document.addEventListener("keydown", function (e) {
  // Ermitteln der gedrückten Taste aus der Zuordnung
  var key = allowedKeys[e.keyCode];

  // Prüfen auf Konami-Code
  var konamiRequiredKey = konamiCode[konamiCodePosition];
  if (key == konamiRequiredKey) {
    konamiCodePosition++; // Nächste Position im Konami-Code
    if (konamiCodePosition == konamiCode.length) {
      // Konami-Code vollständig
      activateKonamiCheats();
      konamiCodePosition = 0; // Zurücksetzen für erneute Eingabe
    }
  } else {
    konamiCodePosition = 0; // Zurücksetzen bei falscher Taste
  }

  // Prüfen auf Sexting-Code
  var sextingRequiredKey = sextingCode[sextingCodePosition];
  if (key == sextingRequiredKey) {
    sextingCodePosition++; // Nächste Position im Sexting-Code
    if (sextingCodePosition == sextingCode.length) {
      // Sexting-Code vollständig
      activateSextingCheats();
      sextingCodePosition = 0; // Zurücksetzen für erneute Eingabe
    }
  } else {
    sextingCodePosition = 0; // Zurücksetzen bei falscher Taste
  }
});

// Funktion zur Aktivierung der Konami-Cheats
function activateKonamiCheats() {
  document.body.style.backgroundImage = "url('images/konami.jpg')"; // Hintergrundbild setzen
  document.body.style.backgroundSize = "cover"; // Bild skalieren, um den gesamten Hintergrund abzudecken
  document.body.style.color = "white"; // Textfarbe auf Weiß ändern
  document.body.style.fontFamily = "monospace"; // Schriftart ändern
  document
    .querySelectorAll("*")
    .forEach((el) => (el.style.textShadow = "0 0 5px red")); // Text-Schatten hinzufügen
  var audio = new Audio("assets/audio/konami.mp3"); // Sound abspielen
  audio.play();
  alert("Konami-Cheats aktiviert");
}

var iframe = document.getElementById("iframe-container");

// Funktion zur Aktivierung der Sexting-Cheats
function activateSextingCheats() {
  var audio = new Audio("assets/audio/konami.mp3"); // Sound abspielen (optional anderer Sound)
  audio.play();
  alert("Sexting-Cheats aktiviert");
  var iframe = document.getElementById("iframe-container");
  iframe.src = "assets/downloads/sexting1x1zine_mitanleitung.pdf"; // sexting
  iframe.style.display = "block";
}
