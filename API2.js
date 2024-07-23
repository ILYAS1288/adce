// Step 1:


// Step 2:
const container = document.querySelector(".container");

// Step 3: 
const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
  })
  .then((products) => {
   
    const mensCategory = products.filter((product) => product.category === "men's clothing");

    
    console.log("Filtered Men's Category Products:", mensCategory);

    mensCategory.forEach((product) => {
      console.log(product); 
    });

    //  DOM (creating elements)
    mensCategory.forEach((product) => {
      const createDiv = document.createElement('div');
      createDiv.classList.add("card");
      createDiv.innerHTML = `
        <div class="img">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="content">
          <h4>${product.title}</h4>
          <p>Price ${product.price} PKR</p>
        </div>
      `;
      container.appendChild(createDiv); 
    });
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });
