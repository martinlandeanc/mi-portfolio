document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById("video-container");
    const introVideo = document.getElementById("intro-video");

    // Ocultar video al terminar
    introVideo.addEventListener("ended", () => {
        videoContainer.classList.add("hidden");
    });

    // Fallback: Ocultar el video después de un tiempo fijo
    setTimeout(() => {
        videoContainer.classList.add("hidden");
    }, 10000);

    // Botón dinámico
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
    }, 5000);
});
