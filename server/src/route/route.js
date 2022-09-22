import express from 'express';
import { getLongUrl } from '../controller/controller.js';

const urlRoutes = express.Router();
urlRoutes.route('/').post(getLongUrl);

export default urlRoutes;