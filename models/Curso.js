module.exports = (sequelize, dataTypes) => {
    const Curso = sequelize.define('Curso', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: dataTypes.STRING,
        area_id: dataTypes.INTEGER,
    }, {
        tableName: 'cursos'
    });


    Curso.associate = (models) => {
        Curso.belongsTo(models.Area, {
            as: 'area',
            foreignKey: 'area_id'
        })
    }

    return Curso
}