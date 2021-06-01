
import * as express from 'express';
import { Application } from 'express';
import { readAdById, readAllAds } from './ads.controller';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/ads').get(readAllAds)
app.route('/api/ads/:id').get(readAdById)


const httpServer: any = app.listen(9000, () => {
    console.log('HTTP Server running at http://localhost:' + httpServer.address().port);
});
