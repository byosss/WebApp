import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
    userId: string;
    restaurantId: string;
    delivererId: string;
    items: {
        name: string;
        description: string;
        price: number;
    }[];
    price: number;
    createdAt: Date;
    deliveredAt: Date;
    status: string;
}

const orderSchema = new Schema<IOrder>({
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    delivererId: { type: String},
    items: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }
    }],
    price: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    deliveredAt: { type: Date },
    status: { type: String, required: true, enum: ['Preparing', 'InTransit', 'Completed'], default: 'Preparing' }
}, { versionKey: false, collection: 'orders' });

export default mongoose.model<IOrder>('Order', orderSchema);