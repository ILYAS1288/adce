

//Application Programming Interface




//fetch
const url  = 'https://jsonplaceholder.typicode.com/users'
const myrequest =  fetch(url);

//consume

const hard = " https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
const Programming =fetch(url)

Programming.then((para)=>{
    return para.json();
}).then((para)=>{
    return para.json();
})
console.log(Programming );





  const  api =    fetch('https://jsonplaceholder.typicode.com/todos/1')
    
const w = fetch(url);



w.then((end)=>{
    // if(res.ok){
        return end.json()

    //  }else{
//         throw new Error(`HTTP error! status: ${res.status}`);
        
//     }
})
.then((w)=>{
//    if(data.ok)das
})
.catch((err)=>{
    console.log("error to fetch data");
})
console.log(w );







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

