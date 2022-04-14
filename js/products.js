const head_div = document.querySelector(".products-head");
const body_div = document.querySelector(".products-body");

const category_div = document.querySelector(".category");
const search_input = document.getElementById("search_input");
const filter_btn = document.querySelector(".filter");
const clean_btn = document.querySelector(".clean");

const renderHead = async () => {
    const url = "http://localhost:3000/products";
    const products = await fetch(url).then((response) => response.json());
    
    let template = "";
    for(let key in products[0]){
        template += `<th>${key}</th>`;
    }
   
    head_div.innerHTML = template;
}

const redireciona = (id) => {
    window.location.replace(`/editProduct.html?id=${id}`);
}

const renderBody = async (filter) => {
    let url = "";

    if(filter){
        url = `http://localhost:3000/products?${filter.category}=${filter.description}`;
    } else{
        url = `http://localhost:3000/products`;
    }
   
    const products = await fetch(url).then((response) => response.json());
    
    let template = "";

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    products.forEach((product) => {
        template += `<tr onclick='redireciona(${product.id})'>
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

filter_btn.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = {
        category: category_div.options[category_div.selectedIndex].value,
        description: search_input.value
    }

    renderBody(filter);
});

clean_btn.addEventListener("click", (e) => {
    e.preventDefault();

    category_div.value = "default"; 
    search_input.value = "";
    renderBody();
});



window.addEventListener("DOMContentLoaded", () => renderHead(), renderBody());