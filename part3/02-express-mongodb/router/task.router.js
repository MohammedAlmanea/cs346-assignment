import express from 'express';
import {
  create,
  index,
  remove,
  toUpdate,
  update,
} from '../controller/task.controller.js';

const router = express.Router();

router.get('/tasks', index);
router.post('/create', create);
router.get('/tasks/update/:id', toUpdate);
router.post('/tasks/update/:id', update);
router.delete('/tasks/delete/:id', remove);

export default router;
