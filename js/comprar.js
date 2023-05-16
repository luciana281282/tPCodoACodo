// al escuchar el click en el boton de resumen
//escribir en total a pagar

// if es estudiante valor * 0,2(x num entradas)
// if es trainee valor * 0,5 (x num entradas)
// if es junior Valor * 0,85 (x num entradas)


 const valorEntrada = 200;
 const descuentoEstudiante = 0.2;
 const descuentoTrainee = 0.5;
 const descuentoJunior = 0.85;
 const botonBorrar = document.querySelector("#botonB");
 const botonResumen = document.querySelector("#botonR");
 let valorEstudiante = valorEntrada * descuentoEstudiante;
 let valorTrainee = valorEntrada * descuentoTrainee;
 let valorJunior = valorEntrada * descuentoJunior;
 console.log(valorJunior);

// onclick en borrar
 //  function limpiarFormulario() {
  //  document.getElementById("miForm").reset();
  //}

  botonBorrar.addEventListener("click", function(){
	document.getElementById("miForm").reset();
    alert("Le has dado click en borrar");
});

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

botonResumen.addEventListener("click", function(){
    let presupuesto = 0;
    
    let cantidad = document.getElementById("cant");
    //console.log(cantidad);
    let canti= cantidad.value;
   // console.log(canti);
    let tipo = document.getElementById("tipo");
   // console.log(tipo);
    let tipoEstu = tipo.options[tipo.selectedIndex].value;
    let numeroEntero = parseInt(tipoEstu);
   // console.log(tipoEstu);

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
            console.log("entro en caso 3");
            document.getElementById("pagar").innerHTML = 'Total a pagar :'+" "+"$" + presupuesto;
          break;
  
      }


}


)






  //onclick en resumen
  //function resumen(cant, tipo){

  // if tipo == estudiante{
  //    poner en total a pagar cant * ValorEstudiante
 // }
     // else if tipo == trainee{
        // poner en total a pagar cant * ValorTrainee
     //}
  //else poner en total a pagar cant * ValorJunior
//}