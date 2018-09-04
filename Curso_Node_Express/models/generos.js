'use strict';
//esto es para generar los modelos de las bases de datos, de esta foram con sequelize se puede  crear el modelo de base de datos
//1- se crea la base de datos vacia en la herramienta mysql postgres etc.
//2- se instala npm install --save mysql o el gestor de BD que necesites de esta forma puedes exportarla a cualquier base de datos
//3- ejecutamos el comando node_modules/.bin/sequelize init para correrlo esto crea tres carpetas config models y migrations en models creamos el modelo.js
//en migratioos el archivo que exporta osea el create.js y despues el comando  node_modules/.bin/sequelize db:migrate y listo.

module.exports = function(Sequelize, DataTypes){
  var generos = sequelize.define('generos',{
    id_genero:{
      type:DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement:true,
      unique: true,
      allowNull: false

    },
    nombre: {
      type: DataTypes.STRING(11),
      allowNull:false,
      leng:[5, 11]
    }
  });

  return genero;
}
