import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
    name: string;
    description: string;
    type: string;
    price: number;
}

const itemSchema = new Schema<IItem>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model<IItem>('Item', itemSchema);