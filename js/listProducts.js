const cards_div = document.querySelector(".cards");

const renderCard = async () => {
    const url = "http://localhost:3000/products";
    const products = await fetch(url).then((response) => response.json());
    
    let template = "";

    products.forEach((product) => {
        template += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${product.department}</h6>
                    <p class="card-text">${product.productDescription}</p>
                </div>
                <div class="card-footer">
                    <table id="products">
                        <thead class="products-head">
                            <th>Price</th>
                            <th>Quantity</th>
                        </thead>
                        <tbody class="products-body">
                            <td>${product.price}</td>
                            <td>${product.productQuantity}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

    });
   
    cards_div.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderCard());