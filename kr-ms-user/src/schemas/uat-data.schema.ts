/**
 *	@description Default Imports
 */

import * as mongoose from 'mongoose';

/**
 *	@description Schema Configuration
 */

const UATDataSchema = new mongoose.Schema({
	ORDER_NUM: {
		type: String,
	},
	ORDER_SUB_TYPE: {
		type: String,
	},
	NAME: {
		type: String,
	},
	ACCOUNT_NUMBER: {
		type: String,
	},
	ACCOUNT_ID: {
		type: String,
	},
	MSISDN: {
		type: String,
	},
	ORDER_STATUS: {
		type: String,
	},
	USER_ID: {
		type: String,
		default: '',
	},
	USERNAME: {
		type: String,
		default: '',
	},
	DATABASE: {
		type: String,
		default: 'UAT',
	},
	created_date: {
		type: Date,
		default: Date.now,
	},
});

export const UATData = mongoose.model('UATData', UATDataSchema);
