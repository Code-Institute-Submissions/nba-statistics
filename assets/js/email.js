function sendMail(contactForm){
    emailjs.send("gmail","template_LYsBkwyA",{
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "message_html": contactForm.playerrequest.value
    })
    .then(function(response){
        console.log("success", response);
    },
    function(error){
        console.log("failed",error)
    });
    
return false;
}