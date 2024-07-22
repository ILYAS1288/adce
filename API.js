

//Application Programming Interface




//fetch
const url  = 'https://jsonplaceholder.typicode.com/users'
const myrequest =  fetch(url);

//consume

const url1 = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON asynchronously
  })
  .then((data) => {
    console.log(data); // Log the parsed JSON data
    // Further processing of data
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
console.log(url1 );



const url2 = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON asynchronously
  })
  .then(data => {
    console.log(data); // Log the parsed JSON data
    // Further processing of data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  console.log(url2);







const productsContainer= document.querySelector(".productsContainer");

myrequest.then((res)=>{
    if(res.ok){
        return res.json()

    }else{
        throw new Error(`HTTP error! status: ${res.status}`);
    }
})
.then((data)=>{
   if(data.ok)das
})
.catch((err)=>{
    console.log("error to fetch data");
})
console.log(myrequest );

