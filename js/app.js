// app.js

// Function to add a new student to the table
function addStudent() {
    // Collect values from the form
    const student = {
        idNumber: document.getElementById("idNumber").value.trim(),
        firstName: document.getElementById("firstName").value.trim(),
        middleName: document.getElementById("middleName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
    };

    // Validation: check if required fields are filled
    const requiredFields = ["idNumber", "firstName", "lastName"];
    for (let field of requiredFields) {
        if (student[field] === "") {
            alert("Please fill in ID Number, Firstname, and Lastname.");
            return;
        }
    }

    // Add new row to table
    const tableBody = document.getElementById("table-content");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${student.idNumber}</td>
        <td>${student.firstName}</td>
        <td>${student.middleName}</td>
        <td>${student.lastName}</td>
    `;

    tableBody.appendChild(newRow);

    // Reset form and focus back on ID Number
    document.getElementById("studentForm").reset();
    document.getElementById("idNumber").focus();
}

// Event listener for the button
document.getElementById("addStudentButton").addEventListener("click", addStudent);

// Add event listener to the button
$("#addSubject").click(addSubject)

function addSubject() {
    // Get values from the form
    const subjectCode = document.getElementById("subjectCode").value.trim();
    const subjectName = document.getElementById("subjectName").value.trim();
    const units = document.getElementById("units").value.trim();

    // Validation: check if required fields are filled
    if (subjectCode === "" || subjectName === "" || units === "") {
        alert("Please fill in Subject Code, Subject Name, and Units.");
        return;
    }

    // Create a new row
    const tableBody = document.getElementById("table-content");
    const newRow = document.createElement("tr");

    // Insert cells into the row
    newRow.innerHTML = `
        <td>${subjectCode}</td>
        <td>${subjectName}</td>
        <td>${units}</td>
    `;

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear the form fields
    document.getElementById("subjectForm").reset();
}

