const { Aluno, Professor, Turma, Area, Sequelize } = require('../models');
const Op = Sequelize.Op


module.exports = {
    home: (req, res) => {
        res.send('Hello')
    },
    alunos: async (req, res) => {
        const alunos = await Aluno.findAll()
        res.json(alunos)
    },
    aluno: async (req, res) => {
        const {id} = req.params
        const aluno = await Aluno.findByPk(id)
        res.json(aluno)
    },
    alunosYear19: async (req, res) => {
        const alunos = await Aluno.findAll({
            where: {
                ano_matricula: 2019
            }
        })
        res.json(alunos)
    },
    alunosReYear19: async (req, res) => {
        const alunos = await Aluno.findAll({
            where: {
                ano_matricula: 2019,
                [Op.or]: [{nome: {[Op.like]: "%re%"}}, {sobrenome: {[Op.like]: "%re%"}}]
            }
        })
        res.json(alunos)
    },
    professoresId: async (req, res) => {
        const professores = await Professor.findAll({
            where: {
                [Op.or]: [{id: 5}, {id: 3}, {id: 15}]
            }
        })
        res.json(professores)
    }, 
    turmas: async (req, res) => {
        const turmas = await Turma.findAll()
        res.json(turmas)
    },
    areas: async (req, res) => {
        const areas = await Area.findAll()
        res.json(areas)
    }, 
    alunos2desc: async (req, res) => {
        const alunos = await Aluno.findAll({
            limit: 2,
            order: [['nome', 'DESC']]
        })
        res.json(alunos)
    },
    table: (req, res) => {
        res.render('alunos')
    }
}