/**
 * Created by jd on 10/08/16.
 * Configuration environment for Mocha with jsdom
 */
require('babel-register')();

var path, jsdom, exposedProperties;

path = require('path');
jsdom = require('jsdom').jsdom;

exposedProperties = ['window', 'navigator', 'document'];

// Set NODE_PATH for resolving import modules
process.env.NODE_PATH = path.join(__dirname, '..', 'src');
require('module').Module._initPaths();

global.document = jsdom('');
global.window = document.defaultView;

// Configure global scope
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;
