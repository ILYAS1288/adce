//products 

//step1 create a container in html documnet  and style it

//step2 target container throught js
const container = document.querySelector(".container");


//step 3  fetch the data from product api
   const url = "https://fakestoreapi.com/products"

   //use fetch keyword
const data = fetch(url)
.then((res)=>{
   const data = res.json();
   if(res.ok){
       return data;
   }else{
    throw new Error(`Error: Error to fetch data`);
   }
})
.then((products)=>{
    // console.log(data);
    
    for(let product of products){
        const createDiv =document.createElement('div');
        createDiv.classList.add("card")
         createDiv.innerHTML = `
                <div class="img">
                    <img src=${product.image} alt="shoe img">
                </div>
                <div class="content">
                    <h4>${product.title}</h4>
                    <p>Price ${product.price}PKR</p>
                </div> `
                container.appendChild(createDiv);
    }
   
})
.catch((err)=>{
    console.log("Failed to fetch");
})