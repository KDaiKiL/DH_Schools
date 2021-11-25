module.exports = (sequelize, dataTypes) => {
    const Curso = sequelize.define('Curso', {
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
        tableName: 'cursos'
    });

    return Curso
}