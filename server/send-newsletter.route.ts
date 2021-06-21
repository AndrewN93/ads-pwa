import { USER_SUBSCRIPTIONS } from './push.subscriptions';
const webpush = require('web-push');

export function sendNewsletter(req, res) {
  const notificationPayload = {
    notification: {
      title: "My PWA Skillup",
      body: "Here is the push notification text!!! Ho ho ho",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [{
        action: "explore",
        title: "Go to the site"
      }]
    }
  };

  Promise.all(USER_SUBSCRIPTIONS.map(sub => webpush.sendNotification(
    sub, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({ message: 'Newsletter sent successfully.' }))
    .catch(err => {
      console.error("Error sending notification, reason: ", err);
      res.sendStatus(500);
    });
}

