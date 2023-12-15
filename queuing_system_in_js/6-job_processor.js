import { createQueue } from 'kue';

const jobs = createQueue();

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

jobs.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, done);
});
