document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.getElementById('products');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML =`
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <img src="${product.image}" alt="${product.title}">
                `;
                productsDiv.appendChild(productDiv);
            });
        });
});
