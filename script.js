document.addEventListener("DOMContentLoaded", function () {
    const birthdateInput = document.getElementById("birthdate");
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        // Get the user's birth date from the input field
        const birthdate = new Date(birthdateInput.value);

        // Check if a valid date was entered
        if (isNaN(birthdate)) {
            resultElement.textContent = "Please enter a valid date.";
            return;
        }

        // Function to update the age
        function updateAge() {
            const currentDate = new Date();
            const ageInMilliseconds = currentDate - birthdate;
            const ageInSeconds = Math.floor(ageInMilliseconds / 1000);

            // Calculate years, months, days, hours, minutes, and seconds
            const years = Math.floor(ageInSeconds / (365 * 24 * 60 * 60));
            const months = Math.floor((ageInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
            const days = Math.floor((ageInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
            const hours = Math.floor((ageInSeconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((ageInSeconds % (60 * 60)) / 60);
            const seconds = ageInSeconds % 60;

            // Display the age in real-time
            resultElement.textContent = `Congratulations! You have successfully Wasted: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
        }

        // Initial update
        updateAge();

        // Update the age every second
        setInterval(updateAge, 1000);
    });
});
