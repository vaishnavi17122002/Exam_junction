<?php
// Database credentials
$servername = "localhost"; // Change this to your database server
$username = "username"; // Change this to your database username
$password = "password"; // Change this to your database password
$dbname = "Examjunction"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
