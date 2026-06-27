const button = document.getElementById('clickMeBtn');
    const messageDiv = document.getElementById('message');

    // 1. Define the API URL you want to connect to
    const API_URL = 'https://catfact.ninja/fact'; 

    button.addEventListener('click', () => {
        messageDiv.textContent = "Loading fact...";

        // 2. Use fetch() to connect to the backend
        fetch(API_URL)
            .then(response => {
                // Check if the backend responded successfully
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => {
                // 3. Use the data from the backend to update your HTML
                // (catfact.ninja returns an object like { fact: "..." })
                messageDiv.textContent = data.fact; 
            })
            .catch(error => {
                // Handle any errors (backend down, internet issue, etc.)
                console.error('Error:', error);
                messageDiv.textContent = "Failed to fetch data from backend. ❌";
            });
    });
