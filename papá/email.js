function sendMail(){
    let parms = {
        correo : document.getElementById("email").value,
        tel : document.getElementById("phone").value,
    }

    emailjs.send("service_7xu0qb8", "template_7jyiqu9", parms).then(alert("Email Sent!"))
}