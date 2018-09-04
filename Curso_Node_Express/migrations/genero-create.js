'use strict';//en este documento, la migracion, se quitan las validaciones, las validaciones van en el modelo.

module.exports = {
  up: function(queryInterface, Sequelize){//es para cargar la informacion
    return queryInterface.createTable('generos',{
      id_genero:{
        type:Sequelize.INTEGER(11),//aqui se cambia el DataTypoe por Sequelize en el create.
        primaryKey: true,
        autoIncrement:true,
        unique: true,
        allowNull: false

      },
      nombre: {
        type: Sequelize.STRING(11),
        allowNull:false,

      }
    });
  },
  down: function(){//esto es por si falla la subida
    return queryInterface.dropTable('generos');
  }
}
