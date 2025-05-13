import User from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ message: 'Error creating user with this data: ' + req.body });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).send({ message: 'Invalid email' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                res.status(401).send({ message: 'Invalid password' });
            } else {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '2h' });
                res.status(200).send({ user, token });
            }
        }
    } catch (error) {
        res.status(500).send({ message: 'Error logging in with this data: ' + req.body });
    }
}
