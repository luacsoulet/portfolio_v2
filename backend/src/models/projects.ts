import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    name: string;
    firstDescription: string;
    secondDescription: string;
    imageCover: string;
    images: string[];
    technologiesUsed: string[];
    creationDate: Date;
    author: mongoose.Types.ObjectId;
}

const ProjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    firstDescription: { type: String, required: true },
    secondDescription: { type: String, required: true },
    imageCover: { type: String, required: true },
    images: [{ type: String }],
    technologiesUsed: [{ type: String }],
    creationDate: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export default mongoose.model<IProject>('Project', ProjectSchema);