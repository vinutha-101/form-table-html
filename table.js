fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let placeholder = document.querySelector("#data-output");
        let out = "";

        products.forEach((product, index) => {
            out += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.age}</td>
                    <td>${product.select}</td>
                    <td>${product.city}</td>
                    <td>${product.hobbies}</td>
                    <td>${product.gender}</td>
                    <td>
                        <a href="form.html?index=${index}" class="btn btn-warning btn-sm">Edit</a>
                    </td>
                </tr>
            `;
        });

        placeholder.innerHTML = out;
    })
    .catch(error => console.error("Error loading data:", error));
