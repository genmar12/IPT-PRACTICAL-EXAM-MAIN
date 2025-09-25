// app.js

// Function to add a new student to the table
function addStudent() {
    // Get values from the form
    const idNumber = document.getElementById("idNumber").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    // Validation: check if ID and Firstname are filled
    if (idNumber === "" || firstName === "" || lastName === "") {
        alert("Please fill in ID Number, Firstname, and Lastname.");
        return;
    }

    // Create a new row
    const tableBody = document.getElementById("table-content");
    const newRow = document.createElement("tr");

    // Insert cells into the row
    newRow.innerHTML = `
        <td>${idNumber}</td>
        <td>${firstName}</td>
        <td>${middleName}</td>
        <td>${lastName}</td>
    `;

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear the form fields
    document.getElementById("studentForm").reset();
}

// Add event listener to the button
document.getElementById("addStudentButton").addEventListener("click", addStudent);
