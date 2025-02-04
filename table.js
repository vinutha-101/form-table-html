fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.name}</td>
            <td>${product.age}</td>
            <td>${product.select}</td>
            <td>${product.city}</td>
            <td>${product.hobbies}</td>
            <td>${product.gender}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});