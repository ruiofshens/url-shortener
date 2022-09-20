import database from '../config/mysql.config.js';
import Response from '../domain/response.js';
import logger from '../util/logger.js';
import QUERY from '../query/query.js';
import {
    ReasonPhrases,
    StatusCodes,
} from 'http-status-codes';

export const getLongUrl = async (req, res) => {
    logger.info(`{req.method} ${req.originalUrl}, fetching long URL`);
    database.query(QUERY.SELECT_URL, [req.params.short_url], (err, result) => {
        if (err) {
            logger.error(`{req.method} ${req.originalUrl}, ${err}`);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(new Response(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, 'Internal Server Error', null));
        } else {
            if (result.length > 0) {
                res.status(StatusCodes.OK)
                    .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'Database retreived', { longURL: result }));
            } else {
                res.status(StatusCodes.OK)
                    .send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'Database is empty', null));
            }
        }
    });
}
