document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message').textContent;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(welcomeMessage);
        utterance.pitch = 2;
        utterance.rate = 1.3;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log('Sorry, your browser does not support speech synthesis.');
    }
});
