import express from 'express';
import { getProjectById, getProjects, createProject, updateProject, deleteProject } from '../controllers/projects';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', auth, createProject);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

export default router;