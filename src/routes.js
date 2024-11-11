import express from 'express'
import tarefaControllers from './controllers/tarefaControllers.js'

const router = express.Router()

router.get('/', tarefaControllers.index)
router.get('/tasks', tarefaControllers.tasks)
router.get('/nova-lista', tarefaControllers.create)
router.post('/nova-lista', tarefaControllers.save)

export default router;