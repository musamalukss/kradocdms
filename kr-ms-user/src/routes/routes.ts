/**
 *	@description Default Imports
 */
import * as http from 'http';
import { Request, Response, NextFunction } from 'express';

/**
 *	@description Controller Imports
 */

import { AdminController } from '../controllers/controller';

export class Routes {
	public adminController: AdminController = new AdminController();

	public routes(app): void {
		app.route('/').get((req: Request | any, res: Response, next: NextFunction) => {

			console.log("we get here");
			try {
				switch (req.authInfo.authenticated) {
					case true:
						{
							res.status(200).send({ statusCode: 200, message: 'There lies a path ahead with no destination xD' });
						}
						break;
					case false:
						{
							res.status(200).send({
								statusCode: 401,
								message: 'What reason do you have for wanting to access the root route ?-_-?',
							});
						}
						break;
					default:
						break;
				}
			} catch (error) {
				console.error(error);
			}
		});

		app.route('/assigned/sit').get((req: Request | any, res: Response, next: NextFunction) => {
			switch (req.authInfo.authenticated) {
				case true:
					{
						next();
					}
					break;
				case false:
					{
						res.status(200).send({
							statusCode: 401,
							message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
						});
					}
					break;
				default:
					break;
			}
		}, this.adminController.assignedSIT);

		app.route('/assigned/uat').get((req: Request | any, res: Response, next: NextFunction) => {
			switch (req.authInfo.authenticated) {
				case true:
					{
						next();
					}
					break;
				case false:
					{
						res.status(200).send({
							statusCode: 401,
							message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
						});
					}
					break;
				default:
					break;
			}
		}, this.adminController.assignedUAT);

		app.route('/assigned/credit-bureau').get((req: Request | any, res: Response, next: NextFunction) => {
			switch (req.authInfo.authenticated) {
				case true:
					{
						next();
					}
					break;
				case false:
					{
						res.status(200).send({
							statusCode: 401,
							message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
						});
					}
					break;
				default:
					break;
			}
		}, this.adminController.assignedCreditBureau);

		app.route('/users').get((req: Request | any, res: Response, next: NextFunction) => {
			switch (req.authInfo.authenticated) {
				case true:
					{
						next();
					}
					break;
				case false:
					{
						res.status(200).send({
							statusCode: 401,
							message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
						});
					}
					break;
				default:
					break;
			}
		}, this.adminController.users);

		app.route('/reassign').post((req: Request | any, res: Response, next: NextFunction) => {
			switch (req.authInfo.authenticated) {
				case true:
					{
						next();
					}
					break;
				case false:
					{
						res.status(200).send({
							statusCode: 401,
							message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
						});
					}
					break;
				default:
					break;
			}
		}, this.adminController.reassign);

		app.route('/export').get((req: Request | any, res: Response, next: NextFunction) => {
			// switch (req.authInfo.authenticated) {
			// 	case true:
			// 		{
			// 			next();
			// 		}
			// 		break;
			// 	case false:
			// 		{
			// 			res.status(200).send({
			// 				statusCode: 401,
			// 				message: 'What reason do you have for wanting to access root without being authenticated ?-_-?',
			// 			});
			// 		}
			// 		break;
			// 	default:
			// 		break;
			// }
			next();
		}, this.adminController.exportOpenOrders);
	}
}
