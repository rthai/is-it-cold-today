const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => console.log('Redis connected'));
client.on('error', error => console.log('Error connecting to Redis', error));

module.exports = client
