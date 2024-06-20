import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem extends Document {
    name: string;
    description: string;
    price: number;
}

const CartItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model<ICartItem>('CartItem', CartItemSchema);