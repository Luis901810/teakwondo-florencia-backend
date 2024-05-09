

module.exports = sequelize =>{

require("./User/UserRol")(sequelize)
require("./User/User")(sequelize)
const {
    User,
    UserRol
} = sequelize.models



    // relaciones de usuarios
UserRol.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(UserRol, { foreignKey: "roleId" });

}

