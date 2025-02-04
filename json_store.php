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
 
    $data[] = $newEntry;

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    header("Location: index.html");
    exit();
}
?>
