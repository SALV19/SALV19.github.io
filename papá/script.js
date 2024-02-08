document.querySelector("#contact-info").addEventListener("click", 
        function(){
            document.querySelector(".pop-up").classList.add("active");
        });
document.querySelector("#close-btn").addEventListener("click", 
function(){
    document.querySelector(".pop-up").classList.remove("active");
});


document.querySelector("#contact-form").addEventListener("submit",
    function(event){
        
        event.preventDefault();

        const form = event.target;
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const error = document.querySelector(".error");
        
        if(email.value === "" && phone.value === "")
        {
            error.classList.remove("hidden");
        }
        else{
            error.classList.add("hidden");
            document.querySelector(".pop-up").classList.remove("active");
        }
    })