const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const darkBtn = document.getElementById("darkBtn");
const topBtn = document.getElementById("topBtn");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Veuillez remplir tous les champs.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Veuillez entrer un email valide.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message envoyé avec succès !";
  formMessage.style.color = "green";

  form.reset();
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}