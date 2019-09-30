/**
 *	@description Default Imports
 */

import app from './app';
import * as http from 'http';

/**
 * 	@function createServer
 *	@description Creates the server and listens for incoming request
 *	@param httpsOptions
 *  @param app
 */

try {
	http.createServer(app).listen(process.env.PORT, () => {});
} catch (error) {
	console.error(error);
}
