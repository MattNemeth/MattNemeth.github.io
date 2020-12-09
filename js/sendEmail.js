function sendEmail() { 
  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "",
    Password: "",
    To: "mattnemeth.dev@gmail.com", 
    From: "", 
    Subject: "Sending Email using javascript", 
    Body: "Well that was easy!!", 
  }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
}
