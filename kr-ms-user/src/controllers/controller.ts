/**
 *	@description Default Imports
 */

import { Request, Response } from 'express';
import * as _ from 'lodash';
import { Customer } from './../schemas/customer.schema';
import * as json2csv from 'json2csv';
import * as fs from 'fs';

/**
 *	@description Schema Imports
 */

import { SITData } from './../schemas/sit-data.schema';
import { UATData } from './../schemas/uat-data.schema';
import { UserData } from './../schemas/users.schema';

export class AdminController {
	/**
	 * 	@function assigned
	 *	@description Get orders assigned to the users
	 *	@param req
	 *  @param res
	 */
	public assigned(req: Request | any, res: Response) {
		try {
			SITData.find({ USER_ID: { $nin: [null, ''] } }).then(sitOrders => {
				UATData.find({ USER_ID: { $nin: [null, ''] } }).then(uatOrders => {
					return res.status(200).json(_.merge(sitOrders, uatOrders));
				});
			});
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * 	@function assignedSIT
	 *	@description Get orders from SIT that are assigned to the users
	 *	@param req
	 *  @param res
	 */
	public assignedSIT(req: Request | any, res: Response) {
		try {
			SITData.find({ USER_ID: { $nin: [null, ''] } }).then(sitOrders => {
				console.log(sitOrders);
				return res.status(200).json(sitOrders);
			});

			// SITData.aggregate([
			// 	{
			// 		$match: { USER_ID: { $nin: [null, ''] } }
			// 	},
			// 	{
			// 		$group: {
			// 			_id: "$USERNAME",
			// 			UAT: { $push: "$$ROOT" }
			// 		}
			// 	}
			// ]).then(results => {
			// 	res.status(200).json(results);
			// });
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * 	@function assignedUAT
	 *	@description Get orders from UAT that are assigned to the users
	 *	@param req
	 *  @param res
	 */
	public assignedUAT(req: Request | any, res: Response) {
		try {
			UATData.find({ USER_ID: { $nin: [null, ''] } }).then(uatOrders => {
				return res.status(200).json(uatOrders);
			});
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * 	@function assignedCreditBureau
	 *	@description Get orders from UAT that are assigned to the users
	 *	@param req
	 *  @param res
	 */
	public assignedCreditBureau(req: Request | any, res: Response) {
		try {
			Customer.find({ USER_ID: { $nin: [null, ''] } }).then(results => {
				return res.status(200).json({ statusCode: 200, results: results });
			});
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * 	@function reassign
	 *	@description Remove MSISDN from a user and reassign it to the pool
	 *	@param req
	 *  @param res
	 */
	public reassign(req: Request | any, res: Response) {
		try {
			switch (req.body.database) {
				case 'UAT': {
					UATData.updateMany({ MSISDN: req.body.msisdn }, { $set: { USER_ID: '', USERNAME: '' } })
						.then(() => {
							res.status(200).json({ statusCode: 200, message: 'Removed successfully, now assign new order!' });
						})
						.catch(error => {
							console.error(error);
						});
					break;
				}
				case 'SIT': {
					SITData.updateMany({ MSISDN: req.body.msisdn }, { $set: { USER_ID: '', USERNAME: '' } })
						.then(() => {
							res.status(200).json({ statusCode: 200, message: 'Removed successfully, now assign new order!' });
						})
						.catch(error => {
							console.error(error);
						});
					break;
				}
				case 'Credit Bureau': {
					Customer.updateOne({ 'IndividualDetails.SaIdNumber': req.body.msisdn }, { $set: { USER_ID: '' } })
						.then(() => {
							res.status(200).json({ statusCode: 200, message: 'Reassigned successfully!' });
						})
						.catch(error => {
							console.error(error);
						});
					break;
				}
				default:
					break;
			}
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * 	@function allUsers
	 *	@description Get all users registered on TAP
	 *	@param req
	 *  @param res
	 */
	public users(req: Request | any, res: Response) {
		try {
			UserData.find({}).then(users => {
				res.status(200).json(users);
			});
		} catch (error) {
			console.error(error);
		}
	}

	public async exportOpenOrders(req: Request | any, res: Response) {
		try {
			let openOrdersArray: any = [];

			const customers = await Customer.collection.find({
				'Orders.status': 'Open',
			}).toArray();

			customers.forEach(customer => {
				customer.Orders.forEach(order => {
					if (order.status === 'Open') openOrdersArray.push(order)
				});
			});

			if (openOrdersArray.length !== 0) {
				const csv = json2csv.parse(openOrdersArray);

				fs.writeFile('OpenOrders.csv', csv, (error) => {
					if (error) console.log(error)
					else {
						res.download('OpenOrders.csv')
						// res.send({ statusCode: 200 });
					}
				});
			} else {
				res.send({statusCode: 200, message: 'No orders currently in Open State'});
			}
		} catch (error) {
			console.error(error);
		}
	}
}
