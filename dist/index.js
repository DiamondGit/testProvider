"use strict";

var _someOtherAction = _interopRequireDefault(require("./someOtherAction"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var myFunction = function myFunction() {
  console.log("--- HELLO ---");
};
module.exports = {
  myFunction: myFunction,
  otherFunc: _someOtherAction["default"]
};