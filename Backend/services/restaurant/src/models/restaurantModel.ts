import { Schema, model, Document } from 'mongoose';

export interface IRestaurant extends Document {
    name: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    items: [{
        name: string;
        description: string;
        type: string;
        price: number;
    }];
    menus: [{
        name: string;
        description: string;
        price: number;
        items: [{
            id: string;
        }];
    }];
}

const restaurantSchema = new Schema<IRestaurant>({
    name: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    },
    items: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    menus: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        items: [{
            id: {
                type: String,
                required: true
            }
        }]
    }]
}, { versionKey: false, collection: 'restaurants' });

const RestaurantModel = model<IRestaurant>('Restaurant', restaurantSchema);

export default RestaurantModel;
