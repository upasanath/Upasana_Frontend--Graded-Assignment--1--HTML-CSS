document.addEventListener('DOMContentLoaded', () => {
    const labTestLink = document.getElementById('lab-test-link');
    labTestLink.addEventListener('click', (event) => {
        event.preventDefault();
        openLabTestForm();
    });
});

function openLabTestForm() {
    const formHtml = `
        <div id="lab-test-form-container">
            <form id="lab-test-form">
                <h2>Book a Lab Test Slot</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required><br>
                <label for="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required><br>
                <label for="time">Preferred Time:</label>
                <input type="time" id="time" name="time" required><br>
                <input type="submit" value="Book Slot">
            </form>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}
