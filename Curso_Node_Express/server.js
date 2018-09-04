var express = require('express'),//aqui configuramos las dependencias que vamos a necesitar, osea a llamarlos. enjuava es metodo aca es funcion
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    server = express(),
    mensaje = require('./source/app/controller/ejemplo');

server.use(bodyParser.urlencoded({
extend: true                       //porque llaves? porqeu se pueden configurar muchas cosas en bodyParser tiene muchas opciones
}));

server.use(logger('dev'));//esto hace que salgan los logger en la terminal
//el request es la solicitud y el response es la respuesta que se da... revisar documentacion oficial

server.get('/', function(req, res){
res.sendfile('./index.html');
});

server.listen(3000, onListen);
function onListen(){//aqui definimos la funcion
  console.log('Servidor funcionando en puerto 3000');
}

console.log('mensaje: ' + mensaje.mensaje);//aqui llamamos la variable creade en ejemplo.js
