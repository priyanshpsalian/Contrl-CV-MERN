const { customAlphabet } = require('nanoid/async');

module.exports = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    4
);
