var util = require('util'),
    Tab = require('../client/tab').Tab;

var BuyTab = function ()
{
  Tab.call(this);
};

util.inherits(BuyTab, Tab);

BuyTab.prototype.tabName = 'buy';
BuyTab.prototype.mainMenu = 'buy';

BuyTab.prototype.angularDeps = Tab.prototype.angularDeps.concat(['qr']);

BuyTab.prototype.generateHtml = function ()
{
  return require('../../jade/tabs/buy.jade')();
};

BuyTab.prototype.angular = function (module)
{
  module.controller('BuyCtrl', ['$rootScope', function ($scope)
  {
    if (!$id.loginStatus) return $id.goId();

  }]);
};

module.exports = BuyTab;
