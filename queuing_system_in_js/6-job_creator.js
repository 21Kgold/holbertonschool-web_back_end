import kue from 'kue';

const jobs = kue.createQueue();
const job = jobs.create('push_notification_code', {
    phoneNumber: '01010101',
    message: 'Hello kue',
  }).save((err) => {
    if (!err) {
        console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', (result) => {
    console.log('Notification job completed');
})

job.on('failed', (errorMessage) => {
    console.log('Notification job failed');
})
