

const { DataTypes, Sequelize } = require ("sequelize")

module.exports = (Sequelize) =>{
    Sequelize.define("UserGender",{

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    descripcion:{
        type:DataTypes.STRING,
        allowNull: false
    }
    })
}