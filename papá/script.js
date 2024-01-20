const changeBackground = document.querySelector("#bg");
const body = document.querySelector(".img-bg");

console.log(body);
let bgChange = true;
changeBackground.addEventListener("click", function(){
   if(bgChange){
       body.classList.add("bg"); 
    }
    else{
       body.classList.remove("bg"); 
   }
   bgChange = !bgChange;
});