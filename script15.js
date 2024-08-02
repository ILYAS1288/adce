document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');

            // Create HTML for each product
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p class="price">Price: $${product.price}</p>
                        <p>Category: ${product.category}</p>
                    </div>
                `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
