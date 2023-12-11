import createPushNotificationsJobs from './8-job';
import { createQueue } from 'kue';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chai from 'chai';
import kue from 'kue';


chai.use(chaiAsPromised);
const queue = createQueue();
const jobType = 'push_notification_code_3';
const mockJobData = [
    {
      phoneNumber: '252525',
      message: 'Verify your phone number'
    },
    {
      phoneNumber: '363636',
      message: 'Verify your account'
    }
];

const notArray = "Not an array";

describe('testing', () => {
    before(function() {
        queue.testMode.enter();
      });
      
      afterEach(function() {
        queue.testMode.clear();
      });
      
      after(function() {
        queue.testMode.exit()
      });
      
      it('job creator', function() {
        mockJobData.forEach((element) => {
            queue.createJob(jobType, element).save();
        })

        expect(queue.testMode.jobs.length).to.equal(2);
        expect(queue.testMode.jobs[0].type).to.equal(jobType);
        expect(queue.testMode.jobs[0].data).to.eql({ phoneNumber: '252525',
        message: 'Verify your phone number' });
        expect(queue.testMode.jobs[1].type).to.equal(jobType);
        expect(queue.testMode.jobs[1].data).to.eql({ phoneNumber: '363636',
        message: 'Verify your account' });
      });

      it('should create a job with the correct data', async () => {
        // Create a new Kue queue
        const queue = kue.createQueue();
    
        // Define the test data
        const testData = [
          { data: 'data1' },
          { data: 'data2' },
          { data: 'data3' },
        ];
    
        // Call the createPushNotificationsJobs function
        createPushNotificationsJobs(testData, queue);
    
        // Wait for the job to be saved
        await new Promise((resolve) => queue.on('job enqueue', resolve));
    
        // Retrieve the job from the queue
        const job = await new Promise((resolve) => {
          queue.process('push_notification_code_3', 1, (job, done) => {
            done();
            resolve(job);
          });
        });
    
        // Assert that the job has the correct data
        expect(job.data).to.deep.equal(testData[0]);
      });
});
