fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let placeholder = document.querySelector("#data-output");
        let out = "";

        products.forEach((product, index) => {
            out += `
                <tr id="row-${index}">
                    <td>${product.name}</td>
                    <td>${product.age}</td>
                    <td>${product.select}</td>
                    <td>${product.city}</td>
                    <td>${product.hobbies}</td>
                    <td>${product.gender}</td>
                    <td>
                        <a href="edit.html?index=${index}" class="btn btn-warning btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `;
        });

        placeholder.innerHTML = out;

        // Add event listeners to all delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                deleteEntry(index);
            });
        });
    })
    .catch(error => console.error("Error loading data:", error));

// Function to delete an entry
function deleteEntry(index) {
    if (confirm("Are you sure you want to delete this entry?")) {
        fetch("delete.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ index: index }),
        })
        .then(response => response.text())
        .then(() => {
            document.getElementById(`row-${index}`).remove(); // Remove row from table
        })
        .catch(error => console.error("Error deleting data:", error));
    }
}
