import kue from 'kue';

import createPushNotificationsJobs from './8-job';

const queue = kue.createQueue();

const list = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
];
createPushNotificationsJobs(list, queue);

// Retrieve the amount of inactive jobs
queue.inactiveCount((err, count) => {
  if (err) {
    console.error('Error retrieving inactive job count:', err);
    return;
  }
  console.log('Number of inactive jobs:', count);
});

// Retrieve the ID of the last inactive job
const jobId = queue.inactive((err, jobIds) => {
  if (err) {
    console.error('Error retrieving inactive jobs:', err);
    return;
  }

  if (jobIds.length > 0) {
    const lastJobId = jobIds[jobIds.length - 1];
    console.log('ID of the last inactive job:', lastJobId);
    return lastJobId;
  }
  console.log('No inactive jobs found');
});

// Retrieve the amount of active jobs
queue.activeCount((err, count) => {
  if (err) {
    console.error('Error retrieving active job count:', err);
    return;
  }
  console.log('Number of active jobs:', count);
});

// Retrieve the ID of the last active job
const jobId2 = queue.active((err, jobIds) => {
  if (err) {
    console.error('Error retrieving active jobs:', err);
    return;
  }

  if (jobIds.length > 0) {
    const lastJobId = jobIds[jobIds.length - 1];
    console.log('ID of the last active job:', lastJobId);
    return lastJobId;
  }
  console.log('No active jobs found');
});

// Retrieve the amount of complete jobs
queue.completeCount((err, count) => {
  if (err) {
    console.error('Error retrieving complete job count:', err);
    return;
  }
  console.log('Number of complete jobs:', count);
});

// Retrieve the ID of the last complete job
const jobId3 = queue.complete((err, jobIds) => {
  if (err) {
    console.error('Error retrieving complete jobs:', err);
    return;
  }

  if (jobIds.length > 0) {
    const lastJobId = jobIds[jobIds.length - 1];
    console.log('ID of the last complete job:', lastJobId);
    return lastJobId;
  }
  console.log('No complete jobs found');
});

// Retrieve the amount of failed jobs
queue.failedCount((err, count) => {
  if (err) {
    console.error('Error retrieving failed job count:', err);
    return;
  }
  console.log('Number of failed jobs:', count);
});

// Retrieve the ID of the last failed job
const jobId4 = queue.failed((err, jobIds) => {
  if (err) {
    console.error('Error retrieving failed jobs:', err);
    return;
  }

  if (jobIds.length > 0) {
    const lastJobId = jobIds[jobIds.length - 1];
    console.log('ID of the last failed job:', lastJobId);
    return lastJobId;
  }
  console.log('No failed jobs found');
});

// Retrieve the amount of delayed jobs
queue.delayedCount((err, count) => {
  if (err) {
    console.error('Error retrieving delayed job count:', err);
    return;
  }
  console.log('Number of delayed jobs:', count);
});

// Retrieve the ID of the last delayed job
const jobId5 = queue.delayed((err, jobIds) => {
  if (err) {
    console.error('Error retrieving delayed jobs:', err);
    return;
  }

  if (jobIds.length > 0) {
    const lastJobId = jobIds[jobIds.length - 1];
    console.log('ID of the last delayed job:', lastJobId);
    return lastJobId;
  }
  console.log('No delayed jobs found');
});
