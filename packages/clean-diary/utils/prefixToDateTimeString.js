"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixToDateTimeString;

function prefixToDateTimeString(str) {
  var dateString = /^(\d{4}-\d{2}-\d{2})/.exec(str);
  dateString = dateString ? dateString[1] : '';
  var timeString = /--(\d{2}-\d{2})$/.exec(str);
  timeString = timeString ? timeString[1].replace('-', ':') : '00:00';
  return "".concat(dateString, "T").concat(timeString);
}