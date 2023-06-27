const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
.delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router;