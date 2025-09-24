const homeBtn = document.getElementById("home-button")
const projBtn = document.getElementById("proj-button")
const resumeBtn = document.getElementById("resume-button")

homeBtn.addEventListener("click", () => {
    window.location.href = `index.html`
});

projBtn.addEventListener("click", () => {
    window.location.href = `projects.html`
});

resumeBtn.addEventListener("click", () => {
    window.location.href = `resume.html`
});
