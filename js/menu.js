const productsTable_btn  = document.getElementById("productsTable");
const productsList_btn = document.getElementById("productsList");
const createProduct_btn = document.getElementById("createProduct");

productsTable_btn.addEventListener("click", (e) => {
    e.preventDefault(), window.location.href = "tableProduct.html";
});

productsList_btn.addEventListener("click", (e) => {
    e.preventDefault(), window.location.href = "listProduct.html";
});

createProduct_btn.addEventListener("click", (e) => {
    e.preventDefault(), window.location.href = "createProduct.html";
});