'use strict';

var Image = require('../../..');

Image.load('./test/img/moon/nocrop/BloodMoonTest-6.png').then(function (img) {
    img = img.scale({factor:4});
    var roiManager = img.getROIManager();
    var mask = img.grey().mask();

    console.time('mask1');
    roiManager.putMask(mask, {label: 'mask1'});
    console.timeEnd('mask1');

    console.time('mask2');
    roiManager.putMask2(mask, {label: 'mask2', neighbours: 4});
    console.timeEnd('mask2');

}).catch(console.error);