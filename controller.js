function validaciones (){
    var nombre      = document.getElementById('nombre');
    var apellido     = document.getElementById('apellido');
    var email       = document.getElementById('email');
    var telefono    = document.getElementById('telefono');
  
    expresion = {
        nombreExpresion : /^[áéíóúAÉÍÓÚÑña-zA-Z]+\s{1,1}[áéíóúAÉÍÓÚÑña-zA-Z]+$/,
        nombreExpresion2 : /^[áéíóúAÉÍÓÚÑña-zA-Z]+$/,
        emailExpresion  :/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        numeroExpresion : /^(0?9)(\s?)[98765]\d{7}$/
    }
     
    if(!expresion.nombreExpresion2.test(nombre.value)){
        alert('El Nombre NO cumple con las espcificaciones');
        nombre.classList.add("is-invalid");
		nombre.focus();
        return false;
    }else{
        nombre.classList.add("is-valid");
    }

    if(!expresion.nombreExpresion2.test(apellido.value)){
        alert('El Apellido NO cumple con las espcificaciones');
        apellido.classList.add("is-invalid");
		apellido.focus();
        return false;
    }else{
        apellido.classList.add("is-valid");
    }


    if(!expresion.emailExpresion.test(email.value)){
        alert('El correo ingresado no es valido');
        email.classList.add("is-invalid");
        email.focus();
        return false;
    }
    else{
        email.classList.add("is-valid");
    }
 
    if (telefono.value.length <= 8 ){
        alert("El telefono debe tener 9 numeros");
        telefono.classList.add("is-invalid");
        telefono.focus();
        return false; 
    }
    else{
        telefono.classList.add("is-valid");
    }
    if(!expresion.numeroExpresion.test(telefono.value)){
        alert("El telefono es invalido");
        telefono.classList.add("is-invalid");
        telefono.focus();
        return false;
    }else{
        telefono.classList.add("is-valid");
    }
    //quitar espacio .
    var enterar = comoSeEntero(bases);
    if(enterar < 1){
        alert('Debe aceptar las bases y terminos de condición');
        return false;
    }else{
        
        insertar(nombre, apellido, email, telefono);

    }

   
    
}

function quitarEspacio(texto){
    texto.value = texto.value.trim();
}

function insertar(nombre, apellido, email, telefono){
    var xhttp;
    var registro = document.getElementById('registroExitoso');
    var contendorExitoso = document.getElementById('contenedorExitoso');
    var nombreRegistro = document.getElementById('nombreRegistro');
    var textoseccion2 = document.getElementById('textoseccion2');
    var imagenseccion2 = document.getElementById('imagenseccion2');
    var formularioDelete = document.getElementById('formularioDelete');
    var mensajeExitoso = document.getElementById('mensajeExitoso');
    var seccion23 = document.getElementById('seccion23');
    
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            var respuesta = this.responseText;
            contendorExitoso.style.display = 'none';
            textoseccion2.style.display = 'none';
            imagenseccion2.style.display = 'none';
            formularioDelete.style.display = 'none';
            registro.style.display = 'block';
            registro.classList.add("efecto");
            seccion23.style.marginTop = "-500px";
            mensajeExitoso.classList.add("col-md-12");
            nombreRegistro.innerHTML = '<h1>'+nombre.value+' '+apellido.value+'</h1>';
            enviar(nombre, apellido, email, telefono);
        
        }    
    };
    xhttp.open("GET", "command.php?cmd=insertar&nombre="+nombre.value+"&apellido="+apellido.value+"&email="+email.value+"&telefono="+telefono.value, true);
    xhttp.send(); 
} 


function enviar (nombre, apellido, email, telefono){
    var xhttp;
  
    
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            var respuesta = this.responseText;
            console.log("datos enviados correctamente");
        }    
    };
    xhttp.open("POST", "command.php?cmd=enviar", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nombre="+nombre.value+"&apellido="+apellido.value+"&email="+email.value+"&telefono="+telefono.value);
}

function comoSeEntero(bases, bases2){
    var contador = 0;

    if (bases.checked){
        contador++;
    }
   
    return contador;
}

  function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
   
  }


  $(document).ready(function(){
    $('#boton').click(function(){
        if ( $ ('.registroExitoso').attr('class') ==='registroExitoso'){
            $('.registroExitoso');
            $ ('.registroExitoso').css({'left': '0'});
        }
    })
})
