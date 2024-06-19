import mongoose, { Schema, Document } from 'mongoose';

export interface IDeliverer extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    rib: string;
    sponsorCode: string;
    sponsorId: string;
    role: 'deliverer';
}

const DelivererSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^\+?[1-9]\d{1,14}$/ // E.164 international phone number format
    },
    rib: {
        type: String,
        required: true
    },
    sponsorCode: {
        type: String,
        required: false
    },
    sponsorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deliverer',
        required: true
    },
    role: {
        type: String,
        enum: ['deliverer'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

export default mongoose.model<IDeliverer>('Deliverer', DelivererSchema);