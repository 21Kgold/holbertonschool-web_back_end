import { createQueue } from 'kue';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import createPushNotificationsJobs from './8-job';

chai.use(chaiAsPromised);

const jobType = 'push_notification_code_3';
const mockJobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account',
  },
];

const notArray = 'Not an array';
describe('createPushNotificationsJobs', () => {
  const queue = createQueue();
  it('should throw an error if argument is not an array', () => {
    expect(() => createPushNotificationsJobs(notArray, queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('should create the correct number of jobs, with the correct data and correct type', async () => {
    createPushNotificationsJobs(mockJobs, queue);

    // Wait for the job to be completed
    const processedJobs = [];
    let counter = 0;
    await new Promise((resolve) => queue.on('job enqueue', resolve));
    await new Promise((resolve) => {
      queue.process(jobType, mockJobs.length, (job, done) => {
        if (job) {
          done();
          processedJobs.push(job);
          counter += 1;
          if (counter === mockJobs.length) {
            resolve(job);
          }
        } else {
          done();
        }
      });
    });
    processedJobs.forEach((job) => {
      console.log('job id and data');
      console.log(job.id);
      console.log(job.data);
    });

    // Assert that the job has the correct data
    for (let i = 0; i < mockJobs.length; i++) {
      expect(processedJobs[i].data).deep.equal(mockJobs[i]);
      expect(processedJobs[i].type).deep.equal(jobType);
    }
    expect(processedJobs.length).equal(mockJobs.length);
  });
});
