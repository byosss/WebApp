import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurant extends Document {
    email: string;
    password: string;
    role: 'restorer';
}

const restaurantSchema = new Schema<IRestaurant>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['restorer'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<IRestaurant>('Restorer', restaurantSchema);
