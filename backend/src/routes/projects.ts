import express from 'express';
import multer from 'multer';
import { getProjectById, getProjects, createProject, updateProject, deleteProject } from '../controllers/projects';
import { auth } from '../middleware/auth';

const router = express.Router();
const upload = multer();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', auth, upload.any(), createProject);
router.put('/:id', auth, upload.any(), updateProject);
router.delete('/:id', auth, deleteProject);

export default router;