const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    altura: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    peso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
