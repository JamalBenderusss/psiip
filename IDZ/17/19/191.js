let products = [];
fetch('package1.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProduct(products);
    })
    .catch(error => console.error('Error loading product: ',error));

function displayProduct (data){
    const list = document.querySelector('.list-products');
    list.innerHTML = '';
    data.forEach(element => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <h2 class="product-name">${element.name}</h2>
        <img src="${element.src}" alt="dasdas">
        <p class="info">${element.category}</p>
        <p class="product-price"><b>${element.price} $</b></p>
        `
        list.appendChild(productDiv);
    });
}