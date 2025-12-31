function showYear(year) {
  document.getElementById("year-2024").classList.add("hidden");
  document.getElementById("year-2023").classList.add("hidden");

  document.getElementById("year-" + year).classList.remove("hidden");
}
