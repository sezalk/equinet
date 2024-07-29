document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', () => {
        const selectedLanguage = languageSelector.value;
        // Implement language change functionality here
        console.log(`Language changed to: ${selectedLanguage}`);
    });

    const discussionInput = document.getElementById('discussion-input');
    const submitDiscussion = document.getElementById('submit-discussion');
    const discussionBoard = document.getElementById('discussion-board');

    submitDiscussion.addEventListener('click', () => {
        const text = discussionInput.value.trim();
        if (text) {
            const post = document.createElement('div');
            post.className = 'discussion-post';
            post.textContent = text;
            discussionBoard.appendChild(post);
            discussionInput.value = '';
        }
    });
});
