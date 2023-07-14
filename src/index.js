const mb = require('mountebank');
const settings = require('./settings');
const testService = require('./mountebankServer/sampleStubConfig')


const mbServerInstance = mb.create({
    port: settings.port,
    logfile: '../mb.log',
});


mbServerInstance.then(function () {
    testService.addService();

});

