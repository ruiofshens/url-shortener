import database from '../config/mysql.config.js';
import Response from '../domain/response.js';
import logger from '../util/logger.js';
import QUERY from '../query/query.js';
import { nanoid } from 'nanoid';
import {
    ReasonPhrases,
    StatusCodes,
} from 'http-status-codes';

/**
* Queries database using a given shortURL for the corresponding longURL
* Can be used to redirect user to the longURL when shortURL is entered
* (e.g. for a website www.samplewebsite.com that has a shortURL of aX7j-9k76E,
* entering http://18.182.48.215:5000/shorten/aX7j-9k76E will redirect user to www.samplewebsite.com)
*/
export const getLongURL = async (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching long URL`);

    database.query(QUERY.FIND_BY_SHORT_URL, [req.params.short_url], (err, result) => {
        if (err) {
            logger.error(`${req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Retrieving URL failed', null));
        } else {
            logger.info(`${JSON.stringify(result)}`);
            if (result.length > 0) { //result[0].long_url
                res.redirect(result[0].long_url);
            } else {
                res.status(StatusCodes.NOT_FOUND)
                    .send(new Response(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND, 'No URL found', null));
            }
        }
    });
}

/**
* Generates unique shortURL for a new longURL and add mapping into database
* If longURL already exists in database, the current shortURL is returned instead 
*/
export const insertNewURL = async (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, inserting new URL`);

    database.query(QUERY.FIND_BY_LONG_URL, [req.body.long_url], (err, result) => {
        if (err) {
            logger.error(`${req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Checking for existing URL failed', null));
        } else {
            logger.info(`${JSON.stringify(result)}`);
            if (result.length > 0) { // URL already exists in database, simply return the existing shortURL
                res.status(StatusCodes.UNPROCESSABLE_ENTITY)
                    .send(new Response(StatusCodes.UNPROCESSABLE_ENTITY, ReasonPhrases.UNPROCESSABLE_ENTITY, 'URL already exists', { shortURL: result[0].short_url }));
            } else {
                const shortUrl = nanoid(10);
                insertToDB(shortUrl, req.body.long_url, res, req);
            }
        }
    });
}

/**
* Adds mapping of short URL to new URL in database 
*/
const insertToDB = async(shortURL, longURL, res, req) => {
    logger.info(`inserting record to DB`);

    database.query(QUERY.ADD_URL, [shortURL, longURL, longURL], (err, result) => {
        if (err) {
            logger.error(`{req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Adding new URL failed', null));
        } else {
            res.status(StatusCodes.OK)
                .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'New URL added successfully', { shortURL: result[1][0].short_url }));
        }
    });
}

/**
* Helper function to retrieve all URLs currently in database
*/
export const getAllURLs = async (req, res) => {
    logger.info(`{req.method} ${req.originalUrl}, fetching all URLs`);

    database.query(QUERY.SELECT_ALL_URLS, (err, result) => {
        if (err) {
            logger.error(`{req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Retrieving all URLs failed', null));
        } else {
            if (result.length > 0) {
                res.status(StatusCodes.OK)
                    .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'URLs retrieved', { allURLs: result }));
            } else {
                res.status(StatusCodes.OK)
                    .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'Database is empty', null));
            }
        }
    });
}

/**
* Helper function to delete an existing entry in database
*/
export const deleteURL = async (req, res) => {
    logger.info(`{req.method} ${req.originalUrl}, deleting a URL`);

    database.query(QUERY.REMOVE_URL, [req.params.short_url], (err, result) => {
        if (err) {
            logger.error(`{req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Deleting URL failed', null));
        } else {
            res.status(StatusCodes.OK)
                .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'URL in database deleted', null));
        }
    });
}