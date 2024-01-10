// zoekbalk.js

document.getElementById("search-button").addEventListener("click", function () {
  var searchInput = document.getElementById("search-input").value.trim();

  if (searchInput !== "") {
    // Als er een zoekterm is ingevoerd, navigeer naar de resultatenpagina
    window.location.href =
      "resultaten.html?q=" + encodeURIComponent(searchInput);
  } else {
    alert("Voer een zoekterm in.");
  }
});
