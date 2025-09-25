// app.js

// Function to add a new student to the table
function addStudent() {
    // Collect values from the form
    const student = {
        idNumber: $("#idNumber").val().trim(),
        firstName: $("#firstName").val().trim(),
        middleName: $("#middleName").val().trim(),
        lastName: $("#lastName").val().trim(),
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
    const tableBody = $("#table-content");
    const newRow = $("<tr>");

    newRow.html(`
        <td>${student.idNumber}</td>
        <td>${student.firstName}</td>
        <td>${student.middleName}</td>
        <td>${student.lastName}</td>
    `);

    tableBody.append(newRow);

    // Reset form and focus back on ID Number
    $("#studentForm")[0].reset();
    $("#idNumber").focus();
}

// Event listener for the button
$("#addStudentButton").click(addStudent);

// Add event listener to the button
$("#addSubject").click(addSubject);

function addSubject() {
    // Get values from the form
    const subjectCode = $("#subjectCode").val().trim();
    const subjectName = $("#subjectName").val().trim();
    const units = $("#units").val().trim();

    // Validation: check if required fields are filled
    if (subjectCode === "" || subjectName === "" || units === "") {
        alert("Please fill in Subject Code, Subject Name, and Units.");
        return;
    }

    // Create a new row
    const tableBody = $("#table-content");
    const newRow = $("<tr>");

    // Insert cells into the row
    newRow.html(`
        <td>${subjectCode}</td>
        <td>${subjectName}</td>
        <td>${units}</td>
    `);

    // Append row to table
    tableBody.append(newRow);

    // Clear the form fields
    $("#subjectForm")[0].reset();
}
