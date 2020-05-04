function sendMail(contactForm){
    emailjs.send("gmail","player",{
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "message_html": contactForm.projectsummary.value
    })
    .then(function(response){
        console.log("success", response);
    },
    function(error){
        console.log("failed",error)
    });
    
return false;
}