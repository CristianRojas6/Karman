
// Get the modal
var modal = document.getElementById('id01', 'id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
var text = [''];
text = document-getElementById('info').value

var password = [''];
password = document-getElementById('info2').value

var pswRepeat = document.getElementById('info3').value 
*/
/*function redirect() {

    if (text == 'email' && password == 'password' && pswRepeat == 'psw-repeat'){
        window.location.assign("IndexHome.html");
    }else{
        alert('no entre')
    }
    
}
*/

function redirect(){

    if (document.getElementById('info')=='email' && document.getElementById('info2')=='password' && document.getElementById('info3')=='psw-repeat'){ 
            document.form.submit(IndexHoma.html); 
    } else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}
