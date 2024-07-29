document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        alert(`Language changed to: ${selectedLanguage}`);
        // Implement language change functionality here
    });
});
