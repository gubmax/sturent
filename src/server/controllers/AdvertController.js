import mongoose from 'mongoose';
import '../models/AdvertModel';

const Advert = mongoose.model('Advert');

function listAdverts(req, res) {
	Advert.find()
		.skip(parseInt(req.query.skip))
		.limit(10)
		.sort({createdAt: -1})
		.exec((err, cursor) => {
			if(err)
				return res.status(400).json({
					errors: err,
				})

			return res.json(cursor)
		})
}

function findAdvert(req, res) {
	Advert.findOne(
		{'_id': req.params.id},
		(err, task) => {
			if (err)
				res.send(err)
			res.json(task)
		}
	)
}

function createAdvert(req, res) {
	const data = req.body

	if (data.length > 1e6)
		req.connection.destroy()

	const advert = new Advert({
		address: {
			region: data.address
		},
		latitude: 55,
		longitude: 55,
		rooms: data.rooms,
		pay: data.pay,
		pledge: data.pledge,
		tenants: data.tenants,
		text: data.text,
		whom: {
			female: true
		},
		tags: {
			child: true
		}
	});

	advert.save((err, advert) => {
		if(err)
			return res.status(400).json({
				errors: err,
			})

		return res.json({
			advert: advert,
		})
	})
}

function deleteAdvert(id) {
	return Advert.findById(id).remove();
}

export default { listAdverts, findAdvert, createAdvert, deleteAdvert }
