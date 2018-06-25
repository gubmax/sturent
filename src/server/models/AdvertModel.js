import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdvertSchema = new Schema({
	address: {
		region: String,
		city: String,
		settlement: String,
		district: String,
		street: String,
		house: String
	},
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true },
	pay: { type: Number, required: true },
	pledge: { type: Number, required: true },
	tenants: { type: Number, required: true },
	whom: {
		female: Boolean,
		male: Boolean,
		couple: Boolean,
		company: Boolean
	},
	rent: {
		room: Boolean,
		one: Boolean,
		two: Boolean,
		three: Boolean,
		four: Boolean,
		house: Boolean,
		partOfHouse: Boolean
	},
	tags: {
		child: Boolean,
		animal: Boolean,
		smoke: Boolean,
		alcohol: Boolean
	},
	text: { type: String, required: true },
	relevance: { type: Boolean, default: true },
	img: String
}, {
	timestamps: true,
	versionKey: false
})

const Advert = mongoose.model('Advert', AdvertSchema);
