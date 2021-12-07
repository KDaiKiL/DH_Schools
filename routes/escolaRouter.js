const express = require('express');
const router = express.Router();
const escola = require('../controllers/escolaController')

router.get('/home', escola.home);
router.get('/cursos', escola.cursos);
router.get('/alunos', escola.alunos);
router.get('/alunos/:id', escola.aluno);
router.get('/alunos2019', escola.alunosYear19);
router.get('/alunos2019/Re', escola.alunosReYear19);
router.get('/alunos-ultimos', escola.alunos2desc);
router.get('/professoresId3515', escola.professoresId);
router.get('/turmas', escola.turmas); 
router.get('/areas', escola.areas)

router.get('/aluno/cadastro', escola.novoAluno)
router.post('/aluno/cadastro', escola.cadastroAluno)

router.get('/aluno/:id/edit', escola.edit)
router.put('/aluno/:id/edit', escola.editado)

router.delete('/aluno/:id/delete', escola.deleteAluno)

router.get('/curso/cadastro', escola.novoCurso)
router.post('/curso/cadastro', escola.cadastroCurso)

module.exports = router