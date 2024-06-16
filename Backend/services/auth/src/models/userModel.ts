import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    deliveryAddress: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false });

const UserModel = model<IUser>('users', userSchema);

export default UserModel;