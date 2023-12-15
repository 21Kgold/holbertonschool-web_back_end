import createPushNotificationsJobs from './8-job';
import kue, { createQueue } from 'kue';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

const jobType = 'push_notification_code_3';
const mockJobData = [
  {
    phoneNumber: '252528',
    message: 'Verify your phone number please'
  },
  {
    phoneNumber: '363637',
    message: 'Verify your account'
  }
];

describe('createPushNotificationsJobs', () => {
  it('should create a job with the correct data', async () => {
    const queue = createQueue(); // Create the queue

    // Call the createPushNotificationsJobs function
    createPushNotificationsJobs(mockJobData, queue);

    // Wait for the job to be saved
    await new Promise((resolve) => queue.on('job enqueue', resolve));

    // Retrieve the job from the queue
    const job = await new Promise((resolve) => {
        const inactiveJobs = [];
      
        queue.process('push_notification_code_3', 1, (job, done) => {
          if (job.inactive()) { // Check if the job is inactive
            inactiveJobs.push(job);
          }
          done();
        });
      
        queue.on('job complete', () => {
          if (inactiveJobs.length > 0) {
            resolve(inactiveJobs[inactiveJobs.length - 1]);
          }
        });
      });
console.log('this is the promise');
console.log(job.id);
console.log(job.data);
    // Assert that the job has the correct data
    expect(job.data).to.deep.equal(mockJobData[0]);
  });
});
