var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');

var HelloComponent = require('./hello');

module.exports = ng.NgModule({
  imports: [
    ngPlatformBrowser.BrowserModule
  ],
  declarations: [
    HelloComponent
  ],
  bootstrap: [HelloComponent]
})
.Class({
  constructor: function () {}
});
