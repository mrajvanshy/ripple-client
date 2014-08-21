var util = require('util'),
    Tab = require('../client/tab').Tab;

var KycTab = function ()
{
  Tab.call(this);
};

util.inherits(KycTab, Tab);

KycTab.prototype.tabName = 'kyc';
KycTab.prototype.mainMenu = 'kyc';

KycTab.prototype.angularDeps = Tab.prototype.angularDeps.concat(['qr']);

KycTab.prototype.generateHtml = function ()
{
  return require('../../jade/tabs/kyc.jade')();
};

KycTab.prototype.angular = function (module)
{
  module.controller('KycCtrl', ['$rootScope', 'rpId',
    function ($scope, $id) {

      if (!$id.loginStatus) return $id.goId();

      var genNum = function(start, end) {
          var arr = [];
          for (var i = start; i <= end; i++) {
              arr.push('' + i);
            }
          return arr;
        }

      $scope.days = genNum(1, 31);
      $scope.months = ['01 - January', '02 - February', '03 - March', '04 - April', '05 - May', '06 - June', '07 - July', '08 - August', '09 - September', '10 - October', '11 - November', '12 - December'];
      var currentYear = new Date().getFullYear();
      $scope.years = genNum(currentYear - 100, currentYear);

    }]);
};

module.exports = KycTab;
