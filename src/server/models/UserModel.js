import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _vkId: Number,
	email: String,
	password: String,
	name: String,
  favorite_adverts: Array
}, {
	timestamps: true,
	versionKey: false
})

const User = mongoose.model('User', UserSchema);
