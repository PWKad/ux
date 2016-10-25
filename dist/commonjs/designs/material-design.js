"use strict";
var swatches_1 = require('../colors/swatches');
var MaterialDesign = (function () {
    function MaterialDesign() {
        this.type = 'material';
        this.p1 = swatches_1.swatches.blue.p500;
        this.p2 = swatches_1.swatches.blue.p100;
        this.p3 = swatches_1.swatches.blue.p400;
        this.a1 = swatches_1.swatches.pink.a200;
        this.a2 = swatches_1.swatches.pink.a100;
        this.a3 = swatches_1.swatches.pink.a400;
    }
    return MaterialDesign;
}());
exports.MaterialDesign = MaterialDesign;