//navbar lateral
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

//Creación del botón del modo oscuro

const btnswitch = document.querySelector('#switch');
btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');

});

