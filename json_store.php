<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = 'products.json';
    $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    
    $newEntry = [
        "name" => $_POST["name"],
        "age" => $_POST["age"],
        "select" => $_POST["select"],
        "city" => $_POST["city"],
        "hobbies" => $_POST["hobbies"],
        "gender" => $_POST["gender"]
    ];

    if (isset($_POST["index"]) && $_POST["index"] !== "") {
        $index = (int)$_POST["index"];
        $data[$index] = $newEntry;  // Update existing entry
    } else {
        $data[] = $newEntry;  // Add new entry
    }

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
    header("Location: index.html"); // Redirect back to the table
    exit();
}
?>
