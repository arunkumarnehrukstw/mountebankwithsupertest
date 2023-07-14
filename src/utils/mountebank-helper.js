const settings = require('../settings');
const request = require('supertest');

function postImposter(body) {
    const url = `http://127.0.0.1:${settings.port}`;
    mountebankServer = request(url);
    return mountebankServer
    .delete(`/imposters/${settings.port}`)
    .then(() => {
      return mountebankServer
        .post('/imposters')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(body))
    })
}

module.exports = { postImposter };