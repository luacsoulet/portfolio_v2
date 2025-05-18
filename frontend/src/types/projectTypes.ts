export interface Project {
    _id: string;
    name: string;
    firstDescription: string;
    secondDescription: string;
    imageCover: string;
    images: string[];
    technologiesUsed: string[];
    creationDate: Date;
    author: string;
}