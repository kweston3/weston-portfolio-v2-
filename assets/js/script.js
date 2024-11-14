document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    // Adjust scroll value as needed
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// JavaScript to handle toggling of answers
document.querySelectorAll(".question-title").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling; // Get the <p> tag after the <h2>

    // Toggle visibility of the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
