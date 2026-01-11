// Scroll suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Formulario (solo demo)
const form = document.querySelector('#signup');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulario enviado correctamente!');
    form.reset();
});