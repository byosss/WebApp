import mongoose, { Schema, Document } from 'mongoose';

export interface IComm extends Document {
    email: string;
    password: string;
    role: 'comm';
}

const CommSchema = new Schema<IComm>({
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
        enum: ['comm'],
        required: true
    }
}, { versionKey: false, collection: 'users'});

export default mongoose.model<IComm>('Comm', CommSchema);