var aficion = [];




function validar() {
    var retorno_nombre = validar_nombre();
    var retorno_comuna = validar_comuna();
    var retorno_contra = validar_contra();
    var retorno_direccion = validar_direccion();
    var retorno_url = validar_url();
    var retorno_fono = validar_telefono();
    var retorno_afi = validar__aficionados();
   // var letra = encontrar_letra();

    return retorno_nombre && retorno_comuna && retorno_contra && retorno_direccion && retorno_fono && retorno_url && retorno_afi;
}


//

function validar__aficionados() {
    var div_error_afi = document.getElementById("error-afi");
    
    if (aficion.length >= 2 ) {
        div_error_afi.innerHTML = "";
        return true;
    } else {
        div_error_afi.innerHTML = "Debe ingresar al menos 2 aficiones";
        div_error_afi.className = "text-danger small mt-1";
        return false;
    }
}

//
// boton 

function actualizar() {
    var div_lista = document.getElementById("lista_aficiones");
    div_lista.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i in aficion) {
        var li = document.createElement("li");
        li.innerHTML = aficion[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div_lista.appendChild(ul);
}

function agregar_aficion() {
    var input_aficiones = document.getElementById("input_aficiones");
    var aficiones = input_aficiones.value;
    if (aficiones != ""){
        aficion.push(aficiones);
        input_aficiones.value = "";
        actualizar();
    } 
}

// boton

// TELFONO
function validar_telefono(){
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;

    if (fono == "") {
        div_error_fono.innerHTML = "EL telfono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else if (isNaN(fono.slice(1))) {
        div_error_fono.innerHTML = "Debe ingresar un numero valido";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else if (!fono.startsWith("+")) {
        div_error_fono.innerHTML = "El numero debe empezar con +";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else if (fono.length > 16 || fono.length < 12) { 
        div_error_fono.innerHTML = "la cantidad de digitos no es valido";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_fono.textContent = "";
        return true;
    }
}

// TERMINO DE TELFONO

// COMUNA 
function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debes seleccionar alguna comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

// TERMINO DE COMUNA 

 // NOMBRE DE USUARIO
 
 
function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    var primer_caracter = nombre.charAt(0);
    var caracteres_especiales = "!@#$%^&*()_+[]{}|;:,.<>?`~";
    var numero = false;

    for (var i = 0; i< nombre.length;i++) {
        if(caracteres_especiales.includes(nombre.charAt(i))) {
            div_error_nombre.innerHTML = "El nombre no puede contener caracteres especiales";
            div_error_nombre.className = "text-danger small mt-1";  
            return false;  
        }       
    }
    if (nombre == "") {
        div_error_nombre.innerHTML = "El nombre de usuario es obligatorio";
        div_error_nombre.className = "text-danger small mt-1"
        return false;
    } else if (nombre.length < 5 || nombre.length > 10 ) {
        div_error_nombre.innerHTML = "El nombre debe tener 5 o 10 caracteres";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else if (!((primer_caracter >= 'a' && primer_caracter <= 'z') || (primer_caracter >= 'A' && primer_caracter <= 'Z'))) {
        div_error_nombre.innerHTML = "Nombre de usuario debe empezar con con una letra";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } 
    for (var i = 0; i < nombre.length; i++){
        if(!isNaN(parseInt(nombre[i]))){
            numero = true;
        } else {
            if (numero){
                div_error_nombre.innerHTML = "Los digitos van al final";
                div_error_nombre.className = "text-danger small mt-1";
                return false; 
            }
        }
    }
    div_error_nombre.innerHTML = "";
    return true;
}

// TERMINO DE NOMBRE DE USUARIO

// CONTRASEÑA

function validar_contra() {
    var input_contra = document.getElementById("input-contra");
    var div_error_contra = document.getElementById("error-contra");
    var contra = input_contra.value;
    var confirmacion = document.getElementById("input-confirmacion-contra").value;
    var div_error_confirmacion = document.getElementById("error-confirmacion-contra");
    var nom = document.getElementById("input-nombre").value;
    var l = 0;
    var n = 0;
    
    for (var i = 0; i< contra.length;i++) {
        if(!isNaN(parseInt(contra[i]))){
            n++;
        } 
        if(isNaN(parseInt(contra[i]))){
            l++;
        }   
    }

    if (contra == "") {
        div_error_contra.innerHTML = "La contraseña es obligatorio";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (contra.length < 3 || contra.length > 6) {
        div_error_contra.innerHTML = "La contraseña debe tener al menos 3 o 6 caracteres";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (contra == nom) {
        div_error_contra.innerHTML = "La contraseña no puedo coincidir con el nombre de usuario";
        div_error_contra.className = "text-danger small mt-1";
        return false; 
    } else if (contra != confirmacion) {
        div_error_contra.innerHTML = "La contraseña no coinciden";
        div_error_contra.className = "text-danger small mt-1";
        div_error_confirmacion.innerHTML = "La contraseña no coinciden";
        div_error_confirmacion.className = "text-danger small mt-1";
        return false; 
    } else if (l == 0  || n == 0){
        div_error_contra.innerHTML = "Debe contener una letra y un digito";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    }

    div_error_contra.innerHTML = "";
    div_error_confirmacion.innerHTML = "";
    return true;
}


// TERMINO DE CONTRASEÑA

// DIRECCION

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La Direccion es obligatorio";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true
    }
}

// TERMINO DE DIRECCION

// URL

function validar_url() {
    var  url = document.getElementById("input-url").value;
    var div_error_url = document.getElementById("error-url");
    var pos_transferencia = url.indexOf("://");
    var pos_punto = url.lastIndexOf(".");
    var arr_url = url.split(".");
    var ext = arr_url[arr_url.length-1];
    
    if (url == "") {
        div_error_url.innerHTML = "";
        return true;
    }

    if(pos_transferencia > 0 && pos_punto > pos_transferencia && ext.length > 1 ) {
        div_error_url.innerHTML = "";
        return true;
    } else {
        div_error_url.innerHTML = "El url no tiene el formato correcto";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
}

// TERMINO DE URL
