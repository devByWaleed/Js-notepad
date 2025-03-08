// Grapping Elements
let enteredKey = document.getElementById("delKey");
let deleteBtn = document.getElementById("delBtn");

// Event To Delete the Note
deleteBtn.addEventListener("click", function () {

    // Logic For Empyty Field 
    if (enteredKey.value === '') {
        alert("Field is required!!");
    }

    // Logic For The Invalid Key
    else if (localStorage.getItem(enteredKey.value) === null) {
        alert("No note with given key exist!!!");
        enteredKey.value = '';
    }

    // Logic To Delete The Note
    else {
        let deleteKey = enteredKey.value;
        localStorage.removeItem(deleteKey);
        alert("Your note is successfully deleted!");
        enteredKey.value = '';
    }
});