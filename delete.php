<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = 'products.json';

    // Read the JSON file
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
    } else {
        $data = [];
    }

    // Get the index from the request
    $input = json_decode(file_get_contents("php://input"), true);
    $index = isset($input["index"]) ? (int)$input["index"] : -1;

    if ($index >= 0 && $index < count($data)) {
        array_splice($data, $index, 1); // Remove the selected entry

        // Save the updated data back to JSON
        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

        echo "Success";
    } else {
        echo "Invalid index";
    }
}
?>
