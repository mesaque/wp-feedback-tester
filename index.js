'use strict';

var webshot = require('webshot');

webshot('https://example.com.br', 'example.png', function (err) {
    // screenshot now saved to google.png
});