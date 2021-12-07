module.exports = (sequelize, dataTypes) => {
    const Area = sequelize.define('Area', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'areas'
    })

    Area.associate = (models) => {
        Area.hasMany(models.Curso, {
            as: "cursos",
            foreignKey: "area_id"
        });
    }

    return Area
}