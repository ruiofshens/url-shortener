import express from 'express';
import { getLongUrl } from '../controller/controller.js';

const urlRoutes = express.Router();
urlRoutes.route('/').get(getLongUrl);

export default urlRoutes;