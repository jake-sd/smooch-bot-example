'use strict';

const jsonwebtoken = require('jsonwebtoken');

const jwt = jsonwebtoken.sign({
    scope: 'app'
}, process.env.pOsVCVGmikw0Zjp9dw3ZRgb8, {
    headers: {
        kid: process.env.app_57320c3faab1104c01afbb1d
    }
});

module.exports = jwt;

// If run directly, print JWT to cmd line 
if (process.argv[1] === __filename) {
    console.log(jwt);
}
