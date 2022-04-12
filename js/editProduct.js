const id = new URLSearchParams(window.location.search).get("id");

const form = document.getElementById("form-wrapper");
const edit_btn = document.querySelector(".edit");
const delete_btn = document.querySelector(".delete");

const renderProduct = async () => {
    const url = "http://localhost:3000/products/" + id;
    const res = await fetch(url).then((response) => response.json());

    form.productName.value = res.productName;
    form.department.value = res.department;
    form.price.value = res.price;
    form.productAdjective.value = res.productAdjective;
    form.productMaterial.value = res.productMaterial;
    form.product.value = res.product;
    form.productDescription.value = res.productDescription;
    form.productQuantity.value = res.productQuantity;
    form.minimunQuantity.value = res.minimunQuantity;
    form.totalValue.value = res.productQuantity * res.price;
    form.created_at.value = res.created_at;
    form.updated_at.value = res.updated_at;
}

const voltar = () => {
    window.location.replace(`/tableProduct.html`);
}

const editProduct = async (e) => {
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

    const url = "http://localhost:3000/products/" + id;
    await fetch(url, { 
        method: "PUT", 
        body: JSON.stringify(product),
        headers: {"Content-Type":"application/json"} 
    },);

}

const deleteProduct = () => {
    try{
        const url = "http://localhost:3000/products/" + id;
        const validation = confirm("Deseja deletar esse produto?");
        
        if(validation){
            fetch(url, {
                method: 'DELETE',
            });
            window.location.replace("/tableProduct.html");
        }
    } catch(error){
        console.error(error);
    };
}

form.addEventListener("submit", editProduct);
delete_btn.addEventListener("click", () => deleteProduct());
window.addEventListener("DOMContentLoaded", () => renderProduct());