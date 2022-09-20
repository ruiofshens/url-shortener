import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from './domain/response.js';
import logger from './util/logger.js';
import  {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';
import urlRoutes from './route/route.js';

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/shorten', urlRoutes);

app.get('/', (req, res) => {
  res.send(new Response(StatusCodes.OK, ReasonPhrases.OK, 'Server is running', ip.address()));
});

app.all("*", (req, res) => res.status(StatusCodes.NOT_FOUND)
  .send(new Response(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND, 'Route does not exist on the server')));
  
app.listen(PORT, () => logger.info(`Server running on: ${ip.address()}:${PORT}`));