document.addEventListener("DOMContentLoaded", function () {
  var mymap = L.map("map").setView([51.230474048870356, 4.414275972993863], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(mymap);

  // Voeg een marker toe op de opgegeven coördinaten
  var marker = L.marker([51.230474048870356, 4.414275972993863]).addTo(mymap);

  // Voeg eventueel een pop-up toe aan de marker
  marker.bindPopup("AP Hogeschool").openPopup();
});
