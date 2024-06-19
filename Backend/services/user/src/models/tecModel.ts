import mongoose, { Schema, Document } from 'mongoose';

export interface ITec extends Document {
    email: string;
    password: string;
    role: 'tec';
}

const TecSchema: Schema = new Schema({
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
        enum: ['tec'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<ITec>('Tec', TecSchema);