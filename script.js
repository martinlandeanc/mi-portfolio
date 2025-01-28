document.addEventListener("DOMContentLoaded", () => {
    // Selección del overlay y el video
    const videoOverlay = document.getElementById("video-overlay");
    const introVideo = document.getElementById("intro-video");

    // Evento para ocultar el overlay al finalizar el video
    introVideo.addEventListener("ended", () => {
        videoOverlay.classList.add("hidden");
    });

    // Alternativa de seguridad: Ocultar el overlay después de un tiempo fijo
    setTimeout(() => {
        videoOverlay.classList.add("hidden");
    }, introVideo.duration * 1000); // Dura lo mismo que el video

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
