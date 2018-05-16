var ng = require('@angular/core');

module.exports = ng.Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
.Class({
  constructor: function () {
    this.hello = 'Hello World!';
    this.text1 = 'Nagy headline, H1';
    this.text2 = 'Kiemelés';
    this.text3 = 'Form 1';
    this.text4 = 'Radio választás';
    this.text5 = 'Inaktív';
    this.text6 = 'Hover';
    this.text7 = 'Selected';
    this.text8 = 'Kikapcsolt checkbox';
    this.text9 = 'Hover checkbox';
    this.text10 = 'Bekapcsolt checkbox';
    this.text11 = 'Picker';
    this.text12 = 'Inaktív';
    this.text13 = 'Aktív';
    this.text14 = 'Kis alcím H2';
    this.text15 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.text16 = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.text17 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';
    this.text18 = 'Gomb';
  }
});
