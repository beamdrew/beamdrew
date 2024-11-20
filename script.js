// Wait for the DOM to load
window.onload = function() {
    // Hide the splash screen after 3 seconds and show the main content
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
        document.getElementById('content').style.display = 'block';
        
        // Remove the splash screen from the DOM once the fade-out is complete
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
        }, 1000); // Delay to match fade-out time
    }, 3000); // 3 seconds delay before fading out
};
