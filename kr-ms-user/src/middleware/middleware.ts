/**
 *	@description Default Imports
 */

import { Request, Response, NextFunction } from 'express';
import * as requestPromiseNative from 'request-promise-native';

export class Middleware {
	public authenticated(req: Request | any, res: Response, next: NextFunction) {
		// try {
		// 	requestPromiseNative
		// 		.get('http://10.132.86.182:4001/authenticated', {
		// 			withCredentials: true,
		// 			resolveWithFullResponse: true,
		// 			rejectUnauthorized: false,
		// 			headers: {
		// 				cookie: req.headers.cookie,
		// 			},
		// 		})
		// 		.then(response => {
		// 			req.authInfo = JSON.parse(response.body);

		// 			next();
		// 		})
		// 		.catch(error => {
		// 			console.error(error);
		// 		});
		// } catch (error) {
		// 	console.error(error);
		// }
	}
}
