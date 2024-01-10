// resultaten.js

document.addEventListener("DOMContentLoaded", function () {
  // Haal de zoekterm op uit de URL
  const params = new URLSearchParams(window.location.search);
  const zoekterm = params.get("q");

  // Controleer of er een zoekterm is
  if (zoekterm) {
    console.log("Zoekresultaten voor: " + zoekterm);
    // Voeg hier je logica toe om daadwerkelijk naar de zoekterm te zoeken
    // Bijvoorbeeld: stuur een verzoek naar de server en laad zoekresultaten in
  } else {
    console.log("Geen zoekterm opgegeven.");
  }
});
