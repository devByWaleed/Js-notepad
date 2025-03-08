// Method to Display The Saved Notes When The Section Opened
window.onload = function () {
    displaySavedNotes();
};


// Function To Display Saved Notes
function displaySavedNotes() {
    let savedNotes = document.getElementById("saved-notes");
    savedNotes.innerHTML = ""; // Clear previous notes

    // Loop Through The Local Storage Items
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);      // Grapping The Key
        let note = JSON.parse(localStorage.getItem(key));       // Grapping The Respective Note

        // Displaying The Note
        savedNotes.innerHTML += `
            <div>
                <b>Title: </b> <span style="font-size: 20px;">${key}</span>
                <b>Note:</b>
                <span>${note}</span>
            </div>`;
    }
}