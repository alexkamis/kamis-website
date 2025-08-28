// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  // Sätt dagens datum i format YYYY-MM-DD
  const date = new Date().toISOString().slice(0, 10);

  footer.innerHTML = `© Kamis Works — build v${date}`;
  document.body.appendChild(footer);
});