//function to store user name and password
function registro() {

    var inputNombre = document.getElementById("info").value;
    var inputCorreo = document.getElementById("info3").value;
    var inputContra = document.getElementById("info4").value;
    var inputRptContra = document.getElementById("info5").value;

    var usuario = {
        "nombre": inputNombre,
        "correo": inputCorreo,
        "contra": inputContra,
        "rptcontra": inputRptContra,
    }

    localStorage.setItem("nombre", inputNombre);
    localStorage.setItem("correo", inputCorreo);
    localStorage.setItem("contra", inputContra);
    localStorage.setItem("rptcontra", inputRptContra);

    if ((inputNombre == "")) {

        alert("Ingresa tu nombre de usuario");

    } else if ((inputCorreo == "")) {

        alert("Ingresa tu correo");

    } else if ((inputContra == "")) {

        alert("Ingresa la contraseña");

    } else if ((inputRptContra == "")) {

        alert("Repite la contraseña");

    } else if ((inputRptContra == (localStorage.getItem("contra"))) && (inputContra == (localStorage.getItem("rptcontra")))) {

        location.href = "IndexHome.html";

    } else {

        alert("La contraseña es incompatible");

    }

}

var inputCorreo = document.getElementById("info3").value;
var inputContra = document.getElementById("info4").value;

function login() {

      console.log("hola");

    if(inputCorreo.value === null || inputCorreo === ""){

        alert("Ingresa el correo que registraste")
    }
    if(inputContra.value === null || inputContra === ""){

        location.href = "IndexHome.html";
    }


      return false;

}

// end registro()
//function to sign in
 // end login()