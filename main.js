console.log("Hola Mundo! desde la cosola");
//comentarios como en C
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Ingeniero en electrónica | Desarrolladora front-end Jr.</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<h2>¡Si lo puedes imaginar, lo puedes crear!<h2>')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<h2><strong>programar!</strong><h2>')
    .pauseFor(2500)
    .start();