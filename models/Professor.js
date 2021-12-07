module.exports = (sequelize, dataTypes) => {
    const Professor = sequelize.define('Professor', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'professores'
    })

    return Professor
}