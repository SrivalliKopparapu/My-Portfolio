// Lightbox
function openImage(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Dark / Light Mode Toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
