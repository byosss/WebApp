import mongoose, { Schema, Document } from 'mongoose';
import { IItem } from './itemModel';

export interface IMenu extends Document {
    name: string;
    description: string;
    items: IItem['_id'][];
}

const menuSchema = new Schema<IMenu>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

export default mongoose.model<IMenu>('Menu', menuSchema);