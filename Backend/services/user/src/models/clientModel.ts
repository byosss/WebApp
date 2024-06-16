import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'client';
}

const ClientSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
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
    role: {
        type: String,
        enum: ['client'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<IClient>('Client', ClientSchema);