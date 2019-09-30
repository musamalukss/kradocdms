/**
 *	@description Default Imports
 */

import * as mongoose from 'mongoose';

/**
 *	@description Schema Configuration
 */


const UserDataSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	active: {
		type: String,
	},
	admin: {
		type: String,
	},
	created_date: {
		type: Date,
		default: Date.now,
	},
});

export const UserData = mongoose.model('credentials', UserDataSchema);
