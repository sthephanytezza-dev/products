const head_div = document.querySelector(".products-head");
const body_div = document.querySelector(".products-body");

const renderHead = async () => {
    const url = "http://localhost:3000/products";
    const products = await fetch(url).then((response) => response.json());
    
    let template = "";
    for(let key in products[0]){
        template += `<th>${key}</th>`;
    }
   
    head_div.innerHTML = template;
}

const renderBody = async () => {
    const url = "http://localhost:3000/products";
    const products = await fetch(url).then((response) => response.json());
    
    let template = "";

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    products.forEach((product) => {
        template += `<tr>
            <td>${product.id}</td>
            <td>${product.department}</td>
            <td>${product.productName}</td>
            <td>${product.price}</td>
            <td>${product.productAdjective}</td>
            <td>${product.productMaterial}</td>
            <td>${product.product}</td>
            <td>${product.productDescription}</td>
            <td>${product.productQuantity}</td>
            <td>${product.minimunQuantity}</td>
            <td>${formatter.format(product.price*product.productQuantity)}</td>
            <td>${product.created_at}</td>
            <td>${product.updated_at}</td>
        </tr>`;

    });
   
    body_div.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderHead(), renderBody());