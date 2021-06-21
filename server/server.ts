
import * as express from 'express';
import { Application } from 'express';
import { readAdById, readAllAds, readAllAdsFreshness } from './ads.controller';
import { addPushSubscriber } from "./add-push-subscriber.route";
import { sendNewsletter } from "./send-newsletter.route";
import * as webpush from 'web-push';

const bodyParser = require('body-parser');
const app: Application = express();

const vapidKeys = {
  publicKey: "BMTTQru_EJuKGWiCciMwIomIjhINKmoZg-BokCEYhf7iKl63oLAGRJPcaTLnrpH-GAR7b5PND12lrsGGcZQUUhs",
  privateKey: "Ch05XTFCbWRGNjyQhw9-Da9Fy43clRJuHg1KcllzPJM"
};

webpush.setVapidDetails(
  'mailto:andrewsn93workpost@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.use(bodyParser.json());

app.route('/api/ads').get(readAllAds)
app.route('/api/ads-cached').get(readAllAds)
app.route('/api/ads-freshness').get(readAllAdsFreshness)
app.route('/api/ads/:id').get(readAdById)

app.route('/api/notifications').post(addPushSubscriber)
app.route('/api/newsletter').post(sendNewsletter)

const httpServer: any = app.listen(9000, () => {
  console.log('HTTP Server running at http://localhost:' + httpServer.address().port);
});
