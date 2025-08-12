// Animate skill progress bars when scrolled into view
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const skillsTop = skillsSection.offsetTop;
  const winHeight = window.innerHeight;

  if (window.scrollY > skillsTop - winHeight + 100) {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      if (bar.classList.contains("html")) bar.style.width = "90%";
      if (bar.classList.contains("css")) bar.style.width = "80%";
      if (bar.classList.contains("js")) bar.style.width = "70%";
    });
  }
});
