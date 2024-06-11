import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: {
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
    }
}, { versionKey: false });

const UserModel = model<IUser>('users', userSchema);

export default UserModel;