import { moduleFor } from 'ember-qunit';
import ioMock from '../../helpers/io-mock';


moduleFor('service:sails-socket', 'SailsSocketService', {
  // Specify the other units that are required for this test.
  //needs: ['initializer:ember-data-sails'],
  setup:    function () {
    ioMock.mockSetup();
  },
  teardown: function () {
    ioMock.mockTeardown();
  }
});

/*
test('it waits for object to be ready', function (assert) {
  var service = this.subject();
  assert.expect(3);
  assert.strictEqual(service.get('isInitialized'), false, 'the service should not be initialized at start');
  ioMock.mockConnect(10);
  service.on('didInitialize', function () {
    assert.ok(true, 'the didInitialize event should have been triggered');
  });
  return new Ember.RSVP.Promise(function (resolve, reject) {
    Ember.run.later(function () {
      assert.strictEqual(service.get('isInitialized'), true, 'the service should have been initialized');
      resolve();
    }, 100);
  });
});


test('it performs request once connected only', function (assert) {
  var calls = [], service = this.subject();
  assert.expect(2);
  ioMock.mockRequest('get', '/toto', null, {name: 'toto'}, null, function () {
    calls.push('request');
  });
  service.on('didConnect', function () {
    calls.push('didConnect');
  });
  service.on('didInitialize', function () {
    calls.push('didInitialize');
  });
  service.request('get', '/toto', null).then(function (response) {
    calls.push('response');
    assert.deepEqual(response, {name: 'toto'}, 'the response should be correct');
  });
  ioMock.mockConnect(10);
  return new Ember.RSVP.Promise(function (resolve, reject) {
    Ember.run.later(function () {
      assert.deepEqual(
        calls,
        ['didInitialize', 'didConnect', 'request', 'response'],
        'the calls should have been made in correct order');
      resolve();
    }, 100);
  });
});

  */
