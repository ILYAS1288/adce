// promises
console.log("start");

setTimeout(function(){
    console.log("photo uploaded");
}, 0);

var chickenkarahiIngredients = ["salt", "masala", "oil", "totamo", "chicken"];

// create 
const chickenkarahiPromise = new Promise(function(resolve, reject){
    if(chickenkarahiIngredients.includes("oninon")){
        resolve(["biryani is reDY"]);
    } else {
        reject("sorry some ingredients are not available");
    }
});

// consume 
chickenkarahiPromise.then(function(result){
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

console.log("end");

console.log(chickenkarahi);
