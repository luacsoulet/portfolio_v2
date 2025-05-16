import Project from '../models/projects';
import { Request, Response } from 'express';
import { uploadToCloudinary } from '../middleware/images';

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error getting projects' });
    }
}

export const getProjectById = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const project = await Project.findById(id);
        if (!project) {
            res.status(404).send({ message: 'Project not found' });
        } else {
            res.status(200).send(project);
        }
    } catch (error) {
        res.status(500).send({ message: 'Error getting project with id: ' + req?.params?.id });
    }
}

export const createProject = async (req: Request, res: Response) => {
    const auth = req.auth;
    if (!auth) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const files = (req as any).files;
        if (files) {
            const imageCoverFile = files.find((file: any) => file.fieldname === 'imageCover');
            if (imageCoverFile) {
                const imageCoverUrl = await uploadToCloudinary(imageCoverFile.buffer);
                req.body.imageCover = imageCoverUrl;
            }

            const imageFiles = files.filter((file: any) => file.fieldname === 'images');
            if (imageFiles.length > 0) {
                const imageUrls = await Promise.all(
                    imageFiles.map(async (file: any) => {
                        const imageUrl = await uploadToCloudinary(file.buffer);
                        return imageUrl;
                    })
                );
                req.body.images = imageUrls;
            }
        }

        const project = new Project({
            ...req.body,
            author: auth.userId
        });

        await project.save();
        res.status(201).send(project);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).send({ message: 'Error creating project' });
    }
}

export const updateProject = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    const auth = req.auth;

    if (!auth) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).send({ message: 'Project not found' });
        }

        if (project.author.toString() !== auth.userId) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        const files = (req as any).files;
        if (files) {
            const imageCoverFile = files.find((file: any) => file.fieldname === 'imageCover');
            if (imageCoverFile) {
                const imageCoverUrl = await uploadToCloudinary(imageCoverFile.buffer);
                req.body.imageCover = imageCoverUrl;
            }

            const imageFiles = files.filter((file: any) => file.fieldname === 'images');
            if (imageFiles.length > 0) {
                const imageUrls = await Promise.all(
                    imageFiles.map(async (file: any) => {
                        const imageUrl = await uploadToCloudinary(file.buffer);
                        return imageUrl;
                    })
                );
                req.body.images = imageUrls;
            }
        }

        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).send({ message: 'Error updating project' });
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    const auth = req.auth;

    if (!auth) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).send({ message: 'Project not found' });
        }

        if (project.author.toString() !== auth.userId) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        await Project.findByIdAndDelete(id);
        res.status(200).send({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting project with id: ' + req?.params?.id });
    }
}