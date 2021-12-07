module.exports = (sequelize, dataTypes) => {
    const Turma = sequelize.define('Turma', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        duracao: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        ano_inicio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        semestre: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'turmas'
    })
    return Turma 
}