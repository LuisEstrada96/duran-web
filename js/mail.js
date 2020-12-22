function sendMail(){
    let name = $('#name').val();
    let mail = $('#mail').val();
    let subject = $('#subject').val()
    let msg = $('#msg').val()

    let body = "<b>Nombre: </b>"+ name+ "<br>";
    body += "<b>Correo: </b>"+ mail+ "<br>";
    body += "<b>Asunto: </b>"+ subject+ "<br>";
    body += "<b>Mensaje: </b>"+ msg+ "<br>";
    console.log(body)
    Email.send({
      Host : "smtp.gmail.com",
      Username : "duran.refrigeracion.web@gmail.com",
      Password : "duran2020",
      To : 'duranrefrigeracion.ventas@hotmail.com',
      From : "duran.refrigeracion.web@gmail.com",
      Subject : "Nuevo contacto en pagina web",
      Body : body
    }).then((message)=>{
        Swal.fire({
            title: 'Exito',
            text: 'El correo se envio exitosamente, en unos momentos nos pondremos en contacto contigo',
            icon: 'success',
            showConfirmButton: false,
        })
    }

    );
  }