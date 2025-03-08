// Grapping The Elements
let enteredText = document.getElementById("text");
let enteredKey = document.getElementById("key");
let saveBtn = document.getElementById("save");
let retrieveBtn = document.getElementById("retrieve");
let updateBtn = document.getElementById("update");


// Logic To Save The Note
saveBtn.addEventListener("click", function () {

    // Condition For Empty Fields
    if (enteredText.value === '' || enteredKey.value === '') {
        alert("Fields are required!!");
    }

    // Condition For The Key Already Use
    else if (localStorage.getItem(enteredKey.value) !== null) {
        alert("Key already exists!!");
    }

    // Condition For Saving The Note
    else {

        // Logic To Check For The Note Already Exists
        let valueExists = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === JSON.stringify(enteredText.value)) {
                valueExists = true;
                break;
            }
        }

        // Alert For The Note
        if (valueExists) {
            alert("Given note already exists!!");
        }

        // Condition To Save The Note Finally
         else {
            localStorage.setItem(enteredKey.value, JSON.stringify(enteredText.value));
            alert("Your note has been saved successfully!!");
            enteredKey.value = '';
            enteredText.value = '';
        }
    }
});


// Logic To Retrieve The Note
retrieveBtn.addEventListener("click", function () {

    // Condition For Empty Key
    if (enteredKey.value === '') {
        alert("Field is required!!");
    } 

    // Condition To Retrieve The Note
    else {
        let retrieveKey = localStorage.getItem(enteredKey.value);

        // Condition For Invalid Key Checking 
        if (retrieveKey === null) {
            alert("Invalid Key!!");
        } 

        else {
            alert("Your Note Has Been retrieve successully!!");
            enteredText.value = JSON.parse(retrieveKey);  // Set the retrieved text in the text field
        }
    }
});


// Logic To Update The Note
updateBtn.addEventListener("click", function () {
    localStorage.setItem(enteredKey.value, JSON.stringify(enteredText.value));
    alert("Your note has been updated successfully!!");
    enteredKey.value = '';
    enteredText.value = '';
});