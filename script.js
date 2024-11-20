// Wait for the window to load, then hide the splash screen
window.addEventListener('load', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Delay for splash screen animation and fade-out
    setTimeout(() => {
        splashScreen.style.opacity = '0'; // Fade out
        splashScreen.style.transition = 'opacity 0.8s ease';

        // After fade-out, hide splash screen and reveal main content
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Remove splash screen
            mainContent.style.display = 'flex'; // Show main content
        }, 800); // Match fade-out duration
    }, 2000); // Duration before starting fade-out (2 seconds)
});
