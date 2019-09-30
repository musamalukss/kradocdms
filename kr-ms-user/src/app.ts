/**
 *	@description Default Imports
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as dotenvSafe from 'dotenv-safe';
import * as path from 'path';
import * as cors from 'cors';

/**
 *	@description Router Imports
 */

import { Routes } from './routes/routes';

/**
 *	@description Custom Middleware Imports
 */

import { Middleware } from './middleware/middleware';

class App {
	private routePrv: Routes = new Routes();
	private middleware: Middleware = new Middleware();
	public app: express.Application;

	/**
	 * 	@function constructor
	 *	@description Initialize default values
	 *	@param
	 */
	constructor() {
		try {
			this.app = express();

			this.initializeEnvironment();
			this.initializeMongo();
			this.initializeExpress();
		} catch (error) {
			console.log(error);
		}
	}

	/**
	 * 	@function initializeExpress
	 *	@description Initialize express server
	 *	@param
	 */
	private initializeExpress(): void {
		try {
			this.app.use(helmet());
			this.app.use(compression());
			this.app.use(
				cors({
					origin: process.env.ORIGIN,
					methods: ['GET', 'POST'],
					preflightContinue: false,
					optionsSuccessStatus: 204,
					credentials: true,
				}),
			);
			this.app.use(bodyParser.json());
			this.app.use(bodyParser.urlencoded({ extended: false }));
			this.app.use(this.middleware.authenticated);
			this.routePrv.routes(this.app);
		} catch (error) {
			console.log(error);
		}
	}

	/**
	 * 	@function initializeMongo
	 *	@description Initialize the mongo database
	 *	@param
	 */
	private initializeMongo(): void {
		try {
			mongoose.connect(
				process.env.MONGO_URI,
				{ useNewUrlParser: true },
			);
		} catch (error) {
			console.log(error);
		}
	}

	/**
	 * 	@function initializeEnvironment
	 *	@description Initialize environment for server
	 *	@param
	 */
	private initializeEnvironment(): void {
		try {
			process.env.ENVIRONMENT === 'production'
				? dotenvSafe.load({
						path: path.join(__dirname, './../.env.production'),
						sample: path.join(__dirname, './../.env.production'),
				  })
				: dotenvSafe.load({
						path: path.join(__dirname, './../.env.development'),
						sample: path.join(__dirname, './../.env.development'),
				  });
		} catch (error) {
			console.log(error);
		}
	}
}

export default new App().app;
