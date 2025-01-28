document.addEventListener("DOMContentLoaded", () => {
    // Selección del overlay y el video
    const videoOverlay = document.getElementById("video-overlay");
    const introVideo = document.getElementById("intro-video");

    // Forzar reproducción del video al cargar
    introVideo.play().catch((error) => {
        console.error("El video no pudo reproducirse automáticamente:", error);
    });

    // Evento para ocultar el overlay al finalizar el video
    introVideo.addEventListener("ended", () => {
        videoOverlay.classList.add("hidden");
    });

    // Alternativa: Ocultar el overlay después de un tiempo fijo
    setTimeout(() => {
        videoOverlay.classList.add("hidden");
    }, introVideo.duration * 1000 || 7000); // 7 segundos por defecto si la duración no está disponible

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
