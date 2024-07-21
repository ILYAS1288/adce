

var headingone = document.querySelector(".heading1");
var headingTwo = document.querySelector(".heading2");
var headingThree = document.querySelector(".heading3");
var headingFour = document.querySelector(".heading4");
var headingFive = document.querySelector(".heading5");
var headingSix= document.querySelector(".heading6");
var headingSeven = document.querySelector(".heading7");
var headingEight = document.querySelector(".heading8");

var imge = document.querySelector(".imge");

var butt = document.querySelector(".butt");

var para = document.querySelector(".para");

var email = document.querySelector(".email");

//step 2






//para
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


//button
function sequence(element , time , color , border  ,){
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

//name


function sequence(element , time , color , ){
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

//email
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
// heading
function sequence(element, time, color, text) {
   return new Promise((resolve, reject) => {
      if (element) {
         setTimeout(() => {
            element.style.color = color;
            element.textContent = text;
            resolve(); // Resolve the promise after setting styles and text
         }, time);
      } else {
         reject("Can't find element");
      }
   });
}


 sequence(headingone , 1000 , "red"  , "Jordan" )
.then(()=>sequence(headingTwo ,  1000 , "blue" , "Qatar" ))
.then(()=>sequence(headingThree , 1000 , "green" , "Morocco" ))
.then(()=>sequence(headingFour ,  1000 , "Yellow" , "Kuwait" ))
.then(()=>sequence(headingFive ,  1000 , "blue" , "UAE" ))
.then(()=>sequence(headingSix ,   1000 , "pink" , "Iran" ))
.then(()=>sequence(headingSeven , 1000 , "orange" , "UK" ))
.then(()=>sequence(headingEight , 1000 , "blue" , "Pakistan" ))
sequence( para , 20000 , "blue" , "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is widely used for creating interactive and dynamic websites. Originally developed by Netscape as a client-side scripting language, JavaScript is now supported by all modern web browsers and is also used server-side through platforms like Node.js.")
sequence( butt , 30000 , "blue" , "see more" , "6px soild black" )

sequence(imge , 40000 , "red" , "Full Name:" )
sequence(email , 50000 , "blue" , "Enter Your Full Email:")

.catch((error)=>{
    console.log(error);
})













