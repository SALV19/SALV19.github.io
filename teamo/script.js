const si = document.querySelector("#si");
const no = document.querySelector("#no");

let scale = 1;

function nope() 
    {
        no.style.position = "absolute";
        no.style.top = (Math.floor(Math.random() * 80)+10).toString() + "%";
        no.style.left = (Math.floor(Math.random() * 80)+10).toString() + "%";
        if(scale <= 1.5)
        {
            scale += 0.1;
            si.style.scale = scale.toString();
        }
        else
        {
            si.style.background = "radial-gradient(#0D9276, #74E291 70%)";
            si.style.backdropFilter = "blur(10rem)";
            si.style.boxShadow = "0 0 50px 15px #74E291";
        }
    }

no.addEventListener("mouseover", nope);
no.addEventListener("click", nope);

