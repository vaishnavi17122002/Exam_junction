// <!-- JavaScript for Dashboard Charts -->
    document.addEventListener("DOMContentLoaded", function () {
        // Sample data for charts
        const totalUsersData = [500, 600, 700, 800, 900];
        const totalAdminsData = [200, 250, 300, 350, 400];
        const totalInstitutesData = [100, 150, 200, 250, 300];
        const totalActiveUsersData = [400, 450, 500, 550, 600];

        // Chart configurations
        const config = {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Total Users',
                    data: totalUsersData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Initialize and render charts
        const totalUsersChart = new Chart(document.getElementById('totalUsersChart').getContext('2d'), config);
        const totalAdminsChart = new Chart(document.getElementById('totalAdminsChart').getContext('2d'), config);
        const totalInstitutesChart = new Chart(document.getElementById('totalInstitutesChart').getContext('2d'), config);
        const totalActiveUsersChart = new Chart(document.getElementById('totalActiveUsersChart').getContext('2d'), config);
    });




$(document).ready(function () {
    // Handle sidebar link clicks and show corresponding tab content
    $('#sidebar a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('.tab-pane').removeClass('show active');
        $(target).addClass('show active');
        // Highlight active link
        $('#sidebar').find('.active').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    // JavaScript for toggling sidebar visibility on small screens
    const sidebarLinks = document.querySelectorAll('#sidebar a[data-toggle="tab"]');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767.98) { // Check if screen width is small
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('active'); // Hide the sidebar
                const content = document.getElementById('content');
                content.style.marginLeft = '0'; // Adjust content margin
                const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
                toggleSidebarBtn.style.left = '1.5%'; // Move toggle button
                const tog = document.getElementById('tog');
                tog.classList = 'fas fa-bars'; // Change toggle button icon
            }
        });
    });

    // Toggle sidebar functionality for small screens
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        // Adjust margin-left of content
        if (sidebar.classList.contains('active')) {
            content.style.marginLeft = '0';
            toggleSidebarBtn.style.left = '1.5%'; // Move toggle button when sidebar is active
            tog.classList = 'fas fa-align-left';
        } else {
            content.style.marginLeft = '250px'; // Adjust this value to match your sidebar width
            toggleSidebarBtn.style.left = '1.5%'; // Move toggle button when sidebar is inactive
            tog.classList = 'fas fa-bars';
        }
    });


    // Highlight active link on page load
    const currentPath = window.location.pathname;
    $('#sidebar a').each(function () {
        const href = $(this).attr('href');
        if (currentPath.includes(href)) {
            $(this).closest('li').addClass('active');
        }
    });
});


// Toggle password visibility for Owner Create Admin
$('#toggleAdminPassword').on('click', function () {
    var passwordField = $('#admin-password');
    var icon = $('#toggleIconAdmin');
    var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    icon.toggleClass('fa-eye fa-eye-slash');
});

// Toggle password visibility for Owner Create Institute
$('#toggleInstitutePassword').on('click', function () {
    var passwordField = $('#institute-password');
    var icon = $('#toggleIconInstitute');
    var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    icon.toggleClass('fa-eye fa-eye-slash');
});

// Toggle password visibility for Admin Create Institute
$('#adminInstitutetogglePassword').on('click', function () {
    var passwordField = $('#admininstitutepassword');
    var icon = $('#admininstitutetoggleIcon');
    var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    icon.toggleClass('fa-eye fa-eye-slash');
});

// Toggle password visibility for Admin Create teacher
$('#toggleadminteacherPassword').on('click', function () {
    var passwordField = $('#adminteacherpassword');
    var icon = $('#adminteachertoggleIcon');
    var type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    icon.toggleClass('fa-eye fa-eye-slash');
});




var activeTabId = localStorage.getItem('activeTabId');
if (activeTabId) {
    // Show the previously active tab
    $('#' + activeTabId).addClass('show active');
}

// Store the active tab in local storage when a tab is shown
$('.tab-pane').on('show.bs.tab', function (event) {
    var tabId = $(event.target).attr('id');
    localStorage.setItem('activeTabId', tabId);
});


// Get content from markdown file and display it in the preview

// JavaScript to handle sidebar toggle and iframe content loading

// $(document).ready(function () {
//     // Toggle sidebar button functionality
//     $('#toggleSidebarBtn').click(function () {
//         $('#sidebar').toggleClass('active');
//     });

//     // Function to load page content into the iframe
//     function loadPage(pageUrl) {
//         $('#pageFrame').attr('src', pageUrl);
//     }

//     // Click event handler for sidebar links
//     $('.sidebar ul li a').click(function (f) {
//         f.preventDefault();
//         var pageUrl = $(this).attr('href');
//         loadPage(pageUrl);
//     });
// });

// ***************** Manage Permissions ********************

$(document).ready(function() {
    // Simulated data for blocked users
    var blockedUsers = [
        { id: 1, name: "John Doe", blockedDate: "2024-04-15", reason: "Violating terms" },
        { id: 2, name: "Jane Smith", blockedDate: "2024-04-16", reason: "Inappropriate behavior" }
    ];

    // Function to populate the blocked users section
    function populateBlockedUsersSection() {
        var userList = $('#blockedUsersSection .list-group');
        userList.empty(); // Clear previous content

        // Populate the section with blocked user data
        blockedUsers.forEach(function(user) {
            var listItem = $('<li class="list-group-item">');
            listItem.text(user.name + ' - Blocked on ' + user.blockedDate + ' for ' + user.reason);
            userList.append(listItem);
        });
    }

    // When the "Blocked Users" button is clicked, populate the section and show it
    $('#blockedUsersBtn').click(function() {
        populateBlockedUsersSection();
        $('#blockedUsersSection').toggle();
    });
});


// *********** Manage All Tasks ***************
document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const addTaskForm = document.getElementById("add-task-form");
    const addTaskContent = document.getElementById("addTaskContent");

    // Add event listener to the "Add Task" button
    addTaskBtn.addEventListener("click", function () {
        // Show the "Add Task" content and hide the task list
        addTaskContent.style.display = "block";
        taskContent.style.display = "none";
    });

    // Add event listener to the "Add Task" form
    addTaskForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskDueDate = document.getElementById("task-due-date").value;
        const taskPriority = document.getElementById("task-priority").value;
        const taskCategory = document.getElementById("task-category").value;
        const taskTags = document.getElementById("task-tags").value;
        const taskNotes = document.getElementById("task-notes").value;

        // Create a new table row for the task
        const newRow = document.createElement("tr");

        // Populate the row with task details
        newRow.innerHTML = `
            <td>${taskName}</td>
            <td>${taskDescription}</td>
            <td>${taskDueDate}</td>
            <td class="${taskPriority.toLowerCase()}">${taskPriority}</td>
            <td>${taskCategory}</td>
            <td>${taskTags}</td>
            <td>${taskNotes}</td>
        `;

        // Append the new row to the task list
        taskList.appendChild(newRow);

        // Reset the form fields
        addTaskForm.reset();

        // Hide the "Add Task" content and show the task list
        addTaskContent.style.display = "none";
        taskContent.style.display = "block";
    });
});

// Get the button and content elements
const toggleTaskButton = document.getElementById("toggle-task-button");
const addTaskForm = document.getElementById("add-task-form");
const taskList = document.getElementById("task-list");

// Function to show task list and hide add task form
function showTaskList() {
    toggleTaskButton.innerText = "Add Task";
    addTaskForm.style.display = "none";
    taskList.style.display = "block";
}

// Function to show add task form and hide task list
function showAddTaskForm() {
    toggleTaskButton.innerText = "View Tasks";
    addTaskForm.style.display = "block";
    taskList.style.display = "none";
}

// Add event listener to the button
toggleTaskButton.addEventListener("click", function() {
    if (toggleTaskButton.innerText === "Add Task") {
        showAddTaskForm();
    } else {
        showTaskList();
    }
});

// Show task list content when manage tasks content is opened
showTaskList();







// Edit Profile Script 

$(document).ready(function() {
    // Edit Profile Button Click Event
    $('#edit-profile').click(function() {
        // Enable input fields for editing
        $('#profile-name').prop('readonly', false);
        $('#profile-email').prop('readonly', false);
        $('#profile-phone').prop('readonly', false);

        // Display Save button
        $('#edit-profile').hide();
        $('#save-profile').show();
    });

    // Save Profile Button Click Event
    $('#save-profile').click(function() {
        // Perform validation
        var isValid = true;
        var name = $('#profile-name').val();
        var email = $('#profile-email').val();
        var phone = $('#profile-phone').val();

        // Validate name
        if (name.trim() === '') {
            // Show error message
            // For example: $('#name-error').text('Name is required.');
            isValid = false;
        } else {
            // Clear error message
            // For example: $('#name-error').text('');
        }

        // Validate email
        if (email.trim() === '') {
            $('#email-error').text('Email address is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#email-error').text('Please enter a valid email address.');
            isValid = false;
        } else {
            $('#email-error').text('');
        }

        // Validate phone
        if (phone.trim() === '') {
            $('#phone-error').text('Phone number is required.');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            $('#phone-error').text('Please enter a valid phone number.');
            isValid = false;
        } else {
            $('#phone-error').text('');
        }

        // Save profile if all fields are valid
        if (isValid) {
            // Save profile logic
            // For example: saveProfile(name, email, phone);

            // Disable input fields after saving
            $('#profile-name').prop('readonly', true);
            $('#profile-email').prop('readonly', true);
            $('#profile-phone').prop('readonly', true);

            // Hide Save button
            $('#save-profile').hide();
            $('#edit-profile').show();
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone format
function isValidPhone(phone) {
    // Phone number format: +countrycode-phonenumber
    var phoneRegex = /^\d{10,13}$/;
    return phoneRegex.test(phone);
}



// ****************************************************
// Teacher Dashboard Script 

// Bulk Student Selection Script 
document.getElementById('bulk-student-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the student list from the textarea
    var studentList = document.getElementById('student-list').value;
    
    // Process the student list (Send emails, etc.)
    sendEmails(studentList);
});

document.getElementById('file-input').addEventListener('change', function(event) {
    var fileList = event.target.files;

    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        var reader = new FileReader();

        reader.onload = function(event) {
            var content = event.target.result;
            var emails = extractEmails(content);

            // Append extracted emails to the student list textarea
            var studentListTextArea = document.getElementById('student-list');
            studentListTextArea.value += emails.join(', ') + '\n';
        };

        reader.readAsText(file);
    }
});

function extractEmails(text) {
    // Regular expression to match email addresses
    var regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(regex) || [];
}

function sendEmails(studentList) {
    // Convert the student list string into an array of email addresses
    var emails = studentList.split(',').map(function(email) {
        return email.trim();
    });

    // Assuming you have a backend API endpoint to handle sending emails
    var endpoint = 'https://your-backend-api.com/send-emails';

    // Create an object with the email data
    var emailData = {
        emails: emails,
        subject: 'Invitation to Exam',
        body: 'You have been invited to take part in an exam. Please follow the instructions provided.'
        // You can add more properties as needed, like exam ID, etc.
    };

    // Make a POST request to the backend API to send the emails
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
    .then(function(response) {
        if (response.ok) {
            // Email sent successfully
            alert('Emails sent successfully!');
        } else {
            // Email sending failed
            alert('Failed to send emails. Please try again later.');
        }
    })
    .catch(function(error) {
        console.error('Error sending emails:', error);
        alert('An error occurred while sending emails. Please try again later.');
    });
}


// JavaScript to add a new row to the scheduled exams table
function addScheduledExamRow(exam) {
    var tableBody = document.getElementById("scheduledExamsTableBody");
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${exam.id}</td>
        <td>${exam.name}</td>
        <td>${exam.type}</td>
        <td>${exam.date}</td>
        <td>${exam.time}</td>
        <td>${exam.duration}</td>
        <td>${exam.password}</td>
        <td>${exam.syllabus}</td>
        <td><button class="btn btn-primary" onclick="setQuestions(${exam.id})">Set Questions</button></td>
    `;

    tableBody.appendChild(newRow);
}


// Script to display scheduled

// Example function to simulate setting questions for an exam
function setQuestions(examId) {
    alert("Set questions for exam with ID: " + examId);
}

// Example usage to add a new exam row
var newExam = {
    id: "EX001",
    name: "Sample Exam",
    type: "MCQ",
    date: "2024-04-20",
    time: "09:00 AM",
    duration: "90 mins",
    password: "exam123",
    syllabus: "Sample Syllabus"
};
addScheduledExamRow(newExam);



// Set Questions Script 
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to all "Set Questions" buttons
    const setQuestionsButtons = document.querySelectorAll(".set-questions-btn");
    setQuestionsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the exam ID from the button's data attribute
            const examId = button.dataset.examId;
            // Display the modal
            $('#setQuestionsPopup').modal('show');
            // Add the exam ID to the modal content
            document.getElementById("total-questions").innerText = examId;
            // You can customize the content of the modal as needed
            
            // Here you can add code to dynamically generate the content for setting questions based on the exam ID
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to all "Set Questions" buttons
    const setQuestionsButtons = document.querySelectorAll(".set-questions-btn");
    setQuestionsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the exam ID from the button's data attribute
            const examId = button.dataset.examId;
            // Display the modal
            $('#setQuestionsPopup').modal('show');
            // Add the exam ID to the modal content
            document.getElementById("total-questions").innerText = examId;
            // You can customize the content of the modal as needed
            // Here you can add code to dynamically generate the content for setting questions based on the exam ID
        });
    });
});


// script.js

document.getElementById("exam-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const selectedSubject = document.getElementById("exam-subject").value;
    const examTimer = document.getElementById("exam-timer").value;
    
    if (!selectedSubject || !examTimer) {
        alert("Please select a subject and set the exam timer.");
        return;
    }
    
    const totalTime = examTimer * 60 * 1000; // Convert minutes to milliseconds
    startExam(selectedSubject, totalTime);
});

function startExam(subject, totalTime) {
    fetch(`https://api.example.com/questions?subject=${subject}`)
        .then(response => response.json())
        .then(data => {
            displayQuestions(data.questions);
            startTimer(totalTime);
        })
        .catch(error => console.error("Error fetching questions:", error));
}

function displayQuestions(questions) {
    const examQuestionsDiv = document.getElementById("exam-questions");
    examQuestionsDiv.innerHTML = "";
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("form-group");
        questionDiv.innerHTML = `
            <label for="question-${index + 1}">${index + 1}. ${question.question}</label>
            <select id="question-${index + 1}" class="form-control" required>
                <option value="">Select an option</option>
                ${question.options.map(option => `<option value="${option}">${option}</option>`).join("")}
            </select>
        `;
        examQuestionsDiv.appendChild(questionDiv);
    });
}

function startTimer(totalTime) {
    const timerElement = document.getElementById("timer");
    let timeLeft = totalTime;
    
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timerElement.textContent = `Time Remaining: ${minutes}m ${seconds}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endExam();
        } else {
            timeLeft -= 1000;
        }
    }, 1000);
}

function endExam() {
    const examForm = document.getElementById("exam-form");
    examForm.innerHTML = "<h3>Exam Ended!</h3>";
    examForm.innerHTML += "<p>Submitting your answers...</p>";
    
    // Simulate exam submission (replace with your actual submission logic)
    setTimeout(() => {
        examForm.innerHTML = "<h3>Exam Submitted Successfully!</h3>";
        examForm.innerHTML += "<p>View your results in the dashboard.</p>";
    }, 2000);
}



// Admin Dashboard
