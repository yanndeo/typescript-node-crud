import Application from "./app";

import connectDB from './database';

/**
 * Starting Server
 */

//Connect database
connectDB();

//Lauch Application
const app = new Application();

app.start();

