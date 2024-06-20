import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem {
    name: string;
    description: string;
    price: number;
}

const CartItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

export interface IClient extends Document {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    password: string;
    cart: ICartItem[];
    role: 'client';
}

const ClientSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zip: { type: String, required: true }, 
    },
    password: { type: String, required: true },
    cart: [CartItemSchema],
    role: { type: String, enum: ['client'], required: true }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<IClient>('Client', ClientSchema);