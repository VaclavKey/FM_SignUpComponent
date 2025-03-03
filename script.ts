let selectedScore: number = 0;

document.querySelectorAll<HTMLButtonElement>(".rating-button").forEach(button => {
  button.addEventListener("click", () => {
    selectedScore = parseInt(button.textContent || "0", 10); // Преобразуем текстовое содержимое в число
    document.querySelectorAll<HTMLButtonElement>(".rating-button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

document.querySelector<HTMLElement>(".submit-button")?.addEventListener("click", () => {
  const ratingState = document.querySelector<HTMLElement>(".rating-state");
  const thankYouState = document.querySelector<HTMLElement>(".thank-you-state");
  const scoreElement = document.querySelector<HTMLElement>("#score");

  if (ratingState && thankYouState && scoreElement) {
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
    scoreElement.textContent = selectedScore.toString();
  }
});
