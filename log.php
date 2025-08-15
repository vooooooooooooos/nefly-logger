<?php
// Get IP from query string
$captured_ip = $_GET['ip'] ?? 'UNKNOWN';
$timestamp = date("Y-m-d H:i:s");

// Get the public IP from the HTTP request itself
$remote_ip = $_SERVER['REMOTE_ADDR'];

// Prepare the log entry
$log_entry = "$timestamp | Visitor Public IP: $remote_ip | Captured: $captured_ip\n";

// Save to file (ips.txt must be writable)
file_put_contents("ips.txt", $log_entry, FILE_APPEND);

// Respond to the request (optional)
echo "Logged";
?>
