import mongoose, { Schema, Document } from 'mongoose';
import itemSchema, { IItem } from './itemModel';
import menuSchema, { IMenu } from './menuModel';

export interface IRestaurant extends Document {
    name: string;
    description: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    ownerId: string;
    items: IItem[];
    menus: IMenu[];
}

// Restaurant Schema
const restaurantSchema = new Schema<IRestaurant>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ownerId: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zip: { type: String, required: true }
    },
    items: { type: [itemSchema.schema] },
    menus: { type: [menuSchema.schema] }
}, { versionKey: false, collection: 'restaurants' });

export default mongoose.model<IRestaurant>('Restaurant', restaurantSchema);
