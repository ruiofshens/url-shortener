import express from 'express';
import { getLongURL, insertNewURL, getAllURLs, deleteURL } from '../controller/controller.js';

const urlRoutes = express.Router();
urlRoutes.route('/').post(insertNewURL)

urlRoutes.route('/:short_url').get(getLongURL).delete(deleteURL)

urlRoutes.route('/retrieveAll').get(getAllURLs)


export default urlRoutes;