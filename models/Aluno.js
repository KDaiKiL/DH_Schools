module.exports = (sequelize, dataTypes) => {
    const Aluno = sequelize.define('Aluno', {
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
        },
        ano_matricula: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'alunos'
    });

    return Aluno
}