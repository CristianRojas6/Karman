
// Get the modal
var modal = document.getElementById('id01', 'id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function redirect(name, lastName, email, passwd, repeatPasswd) {
    
    
    var nombre = document.getElementById('info').value;
    var apellido = document.getElementById('info2').value;
    var correo = document.getElementById('info3').value;
    var contra = document.getElementById('info4').value;
    var repContra = document.getElementById('info5').value;

    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(contra);
    console.log(repContra);
    
    if (nombre == ''){

        console.log('if1');
        console.log(nombre);
        alert('hola1');
        

    } else if(apellido == ''){

        console.log('if2');
        console.log(apellido);
        alert('hola2');
        
    } else if (correo == ''){

        console.log('if3');
        console.log(correo);
        alert('hola3');
        

    } else if(contra == ''){

        console.log('if4');
        console.log(contra);
        alert('hola4');
        

    } else if(repContra == ''){
        
        console.log('if5');
        console.log(repContra);
        alert('hola5');
        
    } else{

        window.location.assign("IndexHome.html");
        console.log('else')    
    }
    
}

function redirect2(name2, passwd2){

    var nombre2 = document.getElementById('info6').value;
    var contra2 = document.getElementById('info7').value;

    if (nombre2 == ''){

        console.log('if6');
        console.log(nombre2);
        alert('hola6');
        

    } else if(contra2 == ''){

        console.log('if6');
        console.log(contra2);
        alert('hola7');

    } else{
        window.location.assign("IndexHome.html");
        console.log('else')    
    }
}
