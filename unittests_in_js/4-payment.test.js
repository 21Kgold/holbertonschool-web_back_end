const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call the callback function', () => {
    const callbackStub = sinon.stub(Utils, 'calculateNumber');
    callbackStub.returns(10);
    const callback = Utils.calculateNumber('SUM', 100, 20);
    const actual = sendPaymentRequestToApi(100, 20);
    expect(actual).equal(callback);
    expect(10).equal(callback);
  });
});
