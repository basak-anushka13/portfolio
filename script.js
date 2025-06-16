// ========== DARK MODE TOGGLE ==========
window.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("modeToggle");
  const body = document.body;

  // Enable light mode by default
  body.classList.remove("dark-mode");

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
  });

  // ========== PARTICLES BACKGROUND ==========
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      },
      move: { enable: true, speed: 2, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, line_linked: { opacity: 1 } } }
    },
    retina_detect: true
  });
});
