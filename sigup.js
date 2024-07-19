

var headingone = document.querySelector(".heading1");
var headingTwo = document.querySelector(".heading2");
var headingThree = document.querySelector(".heading3");
var headingFour = document.querySelector(".heading4");
var headingFive = document.querySelector(".heading5");
var headingSix= document.querySelector(".heading6");
var headingSeven = document.querySelector(".heading7");
var headingEight = document.querySelector(".heading8");



//step 2

function sequence(element , time , color , text){
     return new Promise((resolve , reject)=>{
        if(element){
            setTimeout(()=>{
                resolve()
                element.style.color = color;
                element.textContent = text;
                
             } , time)
        }else{
           reject("Couldn't find element")
        }
     })
}

//  sequence(headingone , 1000 , "red"  , "Jordan" )
// .then(()=>sequence(headingTwo ,  1000 , "blue" , "Qatar" ))
// .then(()=>sequence(headingThree , 1000 , "green" , "Morocco" ))
// .then(()=>sequence(headingFour ,  1000 , "Yellow" , "Kuwait" ))
// .then(()=>sequence(headingFive ,  1000 , "blue" , "UAE" ))
// .then(()=>sequence(headingSix ,   1000 , "pink" , "Iran" ))
// .then(()=>sequence(headingSeven , 1000 , "orange" , "UK" ))
// .then(()=>sequence(headingEight , 1000 , "blue" , "Pakistan" ))



sequence(headingone , 1000 , "red"  , "Pakistan" )
.then(()=>sequence(headingTwo , 1000 , "blue" , "Sindh" ))
.then(()=>sequence(headingThree , 1000 , "green" , "Punjab" ))
.then(()=>sequence(headingFour , 1000 , "Yellow" , "Gilgit" ))
.then(()=>sequence(headingFive , 1000 , "blue" , "Karachi" ))
.then(()=>sequence(headingSix , 1000 , "pink" , "Kpk" ))
.then(()=>sequence(headingSeven , 1000 , "orange" , "Kashmir" ))
.then(()=>sequence(headingEight , 1000 , "blue" , "Astore" ))




.catch((error)=>{
    console.log(error);
})













