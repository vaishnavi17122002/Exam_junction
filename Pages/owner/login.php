<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include your database connection file
    include_once "db_connection.php";

    // Get form data
    $firstName = $_POST["first_name"];
    $lastName = $_POST["last_name"];
    $email = $_POST["email_id"];
    $phone = $_POST["phone"];
    $country = $_POST["country"];
    $state = $_POST["state"];
    $district = $_POST["district"];
    $city = $_POST["city"];
    $pincode = $_POST["pincode"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password for security

    // Prepare SQL statement to insert data into database
    $sql = "INSERT INTO admins (first_name, last_name, email_id, phone, country, state, district, city, pincode, password) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare the SQL statement
    if ($stmt = $conn->prepare($sql)) {
        // Bind variables to the prepared statement as parameters
        $stmt->bind_param("ssssssssss", $firstName, $lastName, $email, $phone, $country, $state, $district, $city, $pincode, $password);

        // Attempt to execute the prepared statement
        if ($stmt->execute()) {
            // Redirect back to the dashboard or wherever you want
            header("location: owner-dashboard.html");
            exit();
        } else {
            // If execution failed
            echo "Oops! Something went wrong. Please try again later.";
        }

        // Close statement
        $stmt->close();
    }

    // Close connection
    $conn->close();
}
?>
