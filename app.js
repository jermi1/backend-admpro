// punto de entrada para la app

//Requires : inportacion de librerias, que es para que funcione algo
var express = require('express'); //cargar la libreria de express
var mongoose = require('mongoose'); // cargar la libreria mongoose para poder hacer la conexion con la bd

//Inicializar variables
var app = express(); // Usamos la libreria express, asi defino mi servidor express

//conexion a la base de datos:
mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', (err, res) => {
   if(err) throw err;
console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
   
});


// Creando rutas:

app.get('/', (req, res, next) => {
res.status(404).json({  // para que la respuesta sea un json y dentro mando un obj de javascript
    ok: true,
    mensaje: 'Peticion realizada correctamente'
  });
});


//Escuchar peticiones / express

app.listen(3001, () => {
console.log('Express server corriendo en el puerto 3001: \x1b[32m%s\x1b[0m','online');
});

// luego ejecutar comando: node app   --> en consola para probarlo