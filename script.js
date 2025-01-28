document.addEventListener("DOMContentLoaded", () => {
    // Video overlay functionality
    const videoOverlay = document.getElementById("video-overlay");
    const introVideo = document.getElementById("intro-video");

    introVideo.onended = () => {
        videoOverlay.classList.add("hidden"); // Ocultar el overlay al finalizar el video
    };

    // Dynamic button functionality
    const button = document.getElementById("dynamicButton");
    const steps = [
        { text: "Mis Cursos", href: "#courses" },
        { text: "Contacto", href: "#contact" },
        { text: "Conoce más sobre mí", href: "#about" }
    ];
    let currentStep = 0;

    setInterval(() => {
        currentStep = (currentStep + 1) % steps.length;
        button.textContent = steps[currentStep].text;
        button.href = steps[currentStep].href;
    }, 5000); // Cambia cada 5 segundos
});
