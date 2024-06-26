import express from 'express'
import LivroController from '../controllers/livro.controller.js';

const router = express.Router()

router.post('/', LivroController.createLivro)
router.post('/info', LivroController.createLivroInfo)
router.get('/:id', LivroController.getLivro)
router.delete('/:id', LivroController.deleteLivro)
router.delete('/info/:id', LivroController.deleteLivroInfo)

router.put('/', LivroController.updateLivro)

export default router;