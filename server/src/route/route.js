import express from 'express';
import { getLongURL, insertNewURL, getAllURLs, deleteURL } from '../controller/controller.js';

const urlRoutes = express.Router();
urlRoutes.route('/').post(insertNewURL)

urlRoutes.route('/retrieveAll').get(getAllURLs)

urlRoutes.route('/:short_url').get(getLongURL).delete(deleteURL)

export default urlRoutes;