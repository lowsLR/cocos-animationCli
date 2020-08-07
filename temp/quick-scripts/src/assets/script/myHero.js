"use strict";
cc._RF.push(module, '7ca27vQcdtMc4HtI1wyQeFI', 'myHero');
// script/myHero.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    AnimName: ''
  },
  changeDirection: function changeDirection(dir) {
    this.getComponent(cc.Animation).play(this.AnimName + dir);
  },
  onLoad: function onLoad() {}
});

cc._RF.pop();