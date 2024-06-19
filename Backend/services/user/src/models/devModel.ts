import mongoose, { Schema, Document } from 'mongoose';

export interface IDev extends Document {
    email: string;
    password: string;
    apiKey: string;
    role: 'Dev';
}

const DevSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    },
    password: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Dev'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<IDev>('Dev', DevSchema);