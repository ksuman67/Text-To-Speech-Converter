document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');

    speakButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            alert('Please enter some text to speak.');
        }
    });
});
