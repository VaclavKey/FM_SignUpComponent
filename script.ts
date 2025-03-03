"use strict";
var _a;
let selectedScore = 0;
document.querySelectorAll(".rating-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedScore = parseInt(button.textContent || "0", 10); // Convert text content to number
        document.querySelectorAll(".rating-button").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});
(_a = document.querySelector(".submit-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const ratingState = document.querySelector(".rating-state");
    const thankYouState = document.querySelector(".thank-you-state");
    const scoreElement = document.querySelector("#score");
    if (ratingState && thankYouState && scoreElement) {
        ratingState.style.display = "none";
        thankYouState.style.display = "flex";
        scoreElement.textContent = selectedScore.toString();
    }
});
