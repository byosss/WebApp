import { Schema, model, Document } from 'mongoose';

export interface IRestaurant extends Document {
    name: string;
    address: string;
    rating: number;
}

const restaurantSchema = new Schema<IRestaurant>({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
}, { versionKey: false });

const RestaurantModel = model<IRestaurant>('restaurants', restaurantSchema);

export default RestaurantModel;
