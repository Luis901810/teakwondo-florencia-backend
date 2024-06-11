
const { DataTypes } = require("sequelize")

module.exports = (sequelize) =>{ 
    sequelize.define("UserAuthMethod",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        authmethod:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}