"use strict";
cc._RF.push(module, 'b6154hikatLCLj6RGQ/tqOv', 'myApp');
// script/myApp.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    hero: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    var self = this;
    self.node.on('mouseup', function (event) {
      var visibleSize = cc.view.getVisibleSize(); //获取屏幕大小

      var Xindex = Math.floor(event.getLocationX() * 3 / visibleSize.width);
      var Yindex = 2 - Math.floor(event.getLocationY() * 3 / visibleSize.height);
      var dir = Xindex + Yindex;
      if (Xindex == 1 && Yindex == 1) return;

      if (Xindex < Yindex) {
        dir = 8 - dir;
      }

      self.hero.getComponent('myHero').changeDirection(dir);
      var customEvent = new cc.Event.EventCustom(); // cc.log(customEvent,"===>customEvent")

      for (var item in customEvent) {// console.log(item + ' ' + customEvent[item]);
      }
    });
  }
});

cc._RF.pop();