
/* -------DECLARACION DE VARIABLES Y CONSTANTES------- */

 const valorEntrada = 200;
 const descuentoEstudiante = 0.2;
 const descuentoTrainee = 0.5;
 const descuentoJunior = 0.85;
 const botonBorrar = document.querySelector("#botonB");
 const botonResumen = document.querySelector("#botonR");
 const botonImprimir = document.querySelector("#botonI");
 const botonQR = document.querySelector("#botonQR");
let valorEstudiante = valorEntrada * descuentoEstudiante;
 let valorTrainee = valorEntrada * descuentoTrainee;
 let valorJunior = valorEntrada * descuentoJunior;

  /* ------VALIDAR FORMULARIO ------- */

  function validarFormulario() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var cantidad = document.getElementById("cant").value;
    let tipo = document.getElementById("tipo");


    if (nombre == "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
    if (apellido == "") {
      alert("Por favor, ingresa tu apellido.");
      return false;
    }
    if (email == "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
    if (cantidad == "") {
      alert("Por favor, ingresa una cantidad de entradas.");
      return false;
    }
    if (tipo == "") {
      alert("Por favor, ingresa tu categoria.");
      return false;
    }
    
   
  }



/*botonResumen.addEventListener("click", function(){
    let presupuesto = 0;
    
    let cantidad = document.getElementById("cant");
    console.log(cantidad);
    let canti= cantidad.value;
    console.log(canti);
    let tipo = document.getElementById("tipo");
    console.log(tipo);
    let value = tipo.options[tipo.selectedIndex].value;
    console.log(value);

    if (value == "estudiante") {
        presupuesto = canti * valorEstudiante;
        document.getElementById("pagar").innerHTML = 'Total a pagar:'+" "+"$" + presupuesto;

    }
    else if (value == "trainee"){
        presupuesto = canti * valorTrainee;
        document.getElementById("pagar").innerHTML = 'Total a pagar:'+" "+"$" + presupuesto;
    }
    else{
        presupuesto = canti * valorJunior;
      
        document.getElementById("pagar").innerHTML = 'Total a pagar:'+" "+"$" + presupuesto;
    }



}


)*/





  /* ------BOTON RESUMEN ------- */


botonResumen.addEventListener("click", validarFormulario);
  
botonResumen.addEventListener("click", function(){

    let presupuesto = 0;
    
    let cantida = document.getElementById("cant");
    //console.log(cantidad);
    let canti= cantida.value;
   // console.log(canti);
    let tipo = document.getElementById("tipo");
   // console.log(tipo);
    let tipoEstu = tipo.options[tipo.selectedIndex].value;
    let numeroEntero = parseInt(tipoEstu);
   // console.log(tipoEstu);

   //validarFormulario();

    switch (numeroEntero) {

        case 1:
            presupuesto = canti * valorEstudiante;
          //  console.log("entro en caso 1");
            document.getElementById("pagar").innerHTML = 'Total a pagar :'+" "+"$" + presupuesto;
          break;
        case 2:
            presupuesto = canti * valorTrainee;
           // console.log("entro en caso 2");
            document.getElementById("pagar").innerHTML = 'Total a pagar :'+" "+"$" + presupuesto;
          break;
        case 3:
            presupuesto = canti * valorJunior;
            // console.log("entro en caso 3");
            document.getElementById("pagar").innerHTML = 'Total a pagar :'+" "+"$" + presupuesto;
          break;
          case 4:
            presupuesto = canti * valorEntrada;
            // console.log("entro en caso 4");
            document.getElementById("pagar").innerHTML = 'Total a pagar :'+" "+"$" + presupuesto;
          break;  
  
      }

    })







  /* ------BOTON IMPRIMIR ------- */

function imprimirTicket() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var cantidad = document.getElementById("cant").value;
  let tipo = document.getElementById("tipo");
  let tipoEstu = tipo.options[tipo.selectedIndex].value;
  let numeroEntero = parseInt(tipoEstu);
  let total = document.getElementById("pagar").innerHTML;


   switch (numeroEntero) {

       case 1:
           tipoCategoria = "Estudiante";
         break;
       case 2:
          tipoCategoria = "Trainee";
         break;
       case 3:
         tipoCategoria = "Junior";
         break;
         case 4:
          tipoCategoria = "Sin categoria";
         break;  
 
     }


  
  var ticketHTML = `
    <div id="ticket">
      <h2>Ticket de Compra</h2>
      <br>
      <p><strong>Nombre  :</strong> ${nombre}</p>
      <p><strong>Apellido : </strong> ${apellido}</p>
      <p><strong>Email : </strong> ${email}</p>
      <p><strong>Cantidad : </strong> ${cantidad}</p>
      <p><strong>Categoria : </strong> ${tipoCategoria}</p>
      <br>
      <p> <strong>${total}</strong></p>
      <br>
      <br>
      <h2>Gracias por su Compra</h2>
    </div>
  `;
  
  var ventana = window.open("", "_blank");
  ventana.document.open();
  ventana.document.write(`
    <html>
    <head>
      <title>Ticket de Compra</title>
      <style>
        /* Estilos de impresión */
        @media print {
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 10px;
          }
          
          #ticket {
            border: 1px solid #000;
            padding: 10px;
            width: 200px;
          }
          
          #ticket h2 {
            margin: 0;
            font-size: 18px;
            text-align: center;
          }
          
          #ticket p {
            margin: 5px 0;
          }
        }
      </style>
    </head>
    <body>
      ${ticketHTML}
    </body>
    </html>
  `);
  ventana.document.close();
  ventana.print();
}


botonImprimir.addEventListener("click", validarFormulario);
botonImprimir.addEventListener("click", imprimirTicket);




function mostrarBotonImprimir() {
  
  var segundoBoton = document.getElementById("botonI");
  var segundoBoton2 = document.getElementById("botonQR");



  // Mostrar segundo botón
  segundoBoton.style.display = "block";

   // Mostrar segundo botón
   segundoBoton2.style.display = "block";

}

  /* ------BOTON QR ------- */


botonQR.addEventListener("click", validarFormulario);

var form = document.getElementById("miForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      var nombre = document.getElementById("nombre").value;
      var cantidad = document.getElementById("cant").value;
      
      let tipo = document.getElementById("tipo");
      let tipoEstu = tipo.options[tipo.selectedIndex].value;
      let numeroEntero = parseInt(tipoEstu);
      
      
      switch (numeroEntero) {
      
        case 1:
            tipoCategoria = "Estudiante";
          break;
        case 2:
           tipoCategoria = "Trainee";
          break;
        case 3:
          tipoCategoria = "Junior";
          break;
          case 4:
           tipoCategoria = "Sin categoria";
          break;  
      
      }
      var data = "Nombre: " + nombre + "\nCant: " + cantidad + "\nCategoria: " + tipoCategoria ;
      

      // Generar código QR
      const qrVariable = new QRCode(form);
      qrVariable.makeCode(data);

      html2canvas(document.getElementById("contenedorQR")).then(function(canvas) {
      var imageDataURI = canvas.toDataURL("image/png");
      
   
      var pdf = new jsPDF();
      pdf.addImage(imageDataURI, "PNG", 10, 10, 50, 50);
      pdf.autoPrint(); // Hace que el PDF se imprima automáticamente al abrirlo
      pdf.output("dataurlnewwindow"); // Abre el PDF en una nueva ventana para imprimirlo

      qrVariable.clear();
      
    });
   
  });
  
   




    /* ------BOTON BORRAR ------- */

    botonBorrar.addEventListener("click", function(){
      document.getElementById("miForm").reset();
      document.getElementById("pagar").innerHTML = 'Total a pagar :';
     
        alert("Le has dado click en borrar");
    });

    