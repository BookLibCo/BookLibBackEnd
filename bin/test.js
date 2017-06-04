/**
 * Created by zhy on 2017/5/24.
 */
const req = require('supertest');
const app = require('../app');

req(app)
	.post('/req/add.service')
	.field('title', 'hahahaha')
	.field('price', '$324')
	.field('description', 'viubqr8q9wv4')
	.field('tags', JSON.stringify(['1', '2', '3']))
	// .expect('Content-Type', /json/)
	.end((err, res) => {
		if (err) throw err;
	});
