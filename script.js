const button = document.getElementById('clickMeBtn');
        const messageDiv = document.getElementById('message');

        const phrases = [
            "You did it! 🎉",
            "JavaScript is working perfectly! 🚀",
            "Nice click! 👍",
            "GitHub Pages rules! 🌐"
        ];

        button.addEventListener('click', () => {
            // Pick a random phrase from the array
            const randomIndex = Math.floor(Math.random() * phrases.length);
            messageDiv.textContent = phrases[randomIndex];
        });