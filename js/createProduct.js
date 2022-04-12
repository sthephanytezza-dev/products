const form = document.getElementById("form-wrapper");
const back_btn = document.getElementById("back");

back_btn.addEventListener("click", (e) => {
    e.preventDefault(), window.location.href = "menu.html";
});

const atualizarTotal = () => {
    if(form.price.value !== ""  && form.productQuantity.value !== ""){
        form.totalValue.value = form.productQuantity.value * form.price.value;
    } else if(form.price.value !== ""){
        form.totalValue.value = form.price.value;
    }
}

const createProduct = async (e) => {
    e.preventDefault();

    const product = {
        productName:  form.productName.value,
        department: form.department.value,
        price: form.price.value,
        productAdjective: form.productAdjective.value,
        productMaterial: form.productMaterial.value,
        product: form.product.value,
        productDescription: form.productDescription.value,
        productQuantity: form.productQuantity.value,
        minimunQuantity: form.minimunQuantity.value,
        totalValue: form.totalValue.value,
        created_at: form.created_at.value,
        updated_at: form.updated_at.value
    };

    const url = "http://localhost:3000/products/";
    await fetch(url, { 
        method: "POST", 
        body: JSON.stringify(product),
        headers: {"Content-Type":"application/json"} 
    },);

    window.location.replace("/tableProduct.html");
}

form.addEventListener("submit", createProduct);
