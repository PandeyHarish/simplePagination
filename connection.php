<?php
$conn = mysqli_connect('localhost', 'root', '');
if (!$conn) {
    die("Connection failed" . mysqli_connect_error());
} else {
    mysqli_select_db($conn, 'bca');
}
?>