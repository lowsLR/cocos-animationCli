
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/myApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxteUFwcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlcm8iLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsInNlbGYiLCJub2RlIiwib24iLCJldmVudCIsInZpc2libGVTaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiWGluZGV4IiwiTWF0aCIsImZsb29yIiwiZ2V0TG9jYXRpb25YIiwid2lkdGgiLCJZaW5kZXgiLCJnZXRMb2NhdGlvblkiLCJoZWlnaHQiLCJkaXIiLCJnZXRDb21wb25lbnQiLCJjaGFuZ2VEaXJlY3Rpb24iLCJjdXN0b21FdmVudCIsIkV2ZW50IiwiRXZlbnRDdXN0b20iLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUDtBQURFLEdBSFA7QUFVTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxLQUFULEVBQWU7QUFFbkMsVUFBSUMsV0FBVyxHQUFHWixFQUFFLENBQUNhLElBQUgsQ0FBUUMsY0FBUixFQUFsQixDQUZtQyxDQUVTOztBQUU1QyxVQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixLQUFLLENBQUNPLFlBQU4sS0FBcUIsQ0FBckIsR0FBdUJOLFdBQVcsQ0FBQ08sS0FBOUMsQ0FBYjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxJQUFJSixJQUFJLENBQUNDLEtBQUwsQ0FBV04sS0FBSyxDQUFDVSxZQUFOLEtBQXFCLENBQXJCLEdBQXVCVCxXQUFXLENBQUNVLE1BQTlDLENBQWpCO0FBRUEsVUFBSUMsR0FBRyxHQUFHUixNQUFNLEdBQUdLLE1BQW5CO0FBRUEsVUFBR0wsTUFBTSxJQUFJLENBQVYsSUFBZUssTUFBTSxJQUFJLENBQTVCLEVBQStCOztBQUUvQixVQUFHTCxNQUFNLEdBQUdLLE1BQVosRUFBbUI7QUFDZkcsUUFBQUEsR0FBRyxHQUFHLElBQUlBLEdBQVY7QUFDSDs7QUFFRGYsTUFBQUEsSUFBSSxDQUFDSixJQUFMLENBQVVvQixZQUFWLENBQXVCLFFBQXZCLEVBQWlDQyxlQUFqQyxDQUFpREYsR0FBakQ7QUFFQSxVQUFJRyxXQUFXLEdBQUcsSUFBSTFCLEVBQUUsQ0FBQzJCLEtBQUgsQ0FBU0MsV0FBYixFQUFsQixDQWpCbUMsQ0FrQjVDOztBQUNTLFdBQUksSUFBSUMsSUFBUixJQUFnQkgsV0FBaEIsRUFBNEIsQ0FDeEI7QUFDSDtBQUNKLEtBdEJEO0FBdUJIO0FBbkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGVybzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYubm9kZS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTsgLy/ojrflj5blsY/luZXlpKflsI9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBYaW5kZXggPSBNYXRoLmZsb29yKGV2ZW50LmdldExvY2F0aW9uWCgpKjMvdmlzaWJsZVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB2YXIgWWluZGV4ID0gMiAtIE1hdGguZmxvb3IoZXZlbnQuZ2V0TG9jYXRpb25ZKCkqMy92aXNpYmxlU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGRpciA9IFhpbmRleCArIFlpbmRleDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKFhpbmRleCA9PSAxICYmIFlpbmRleCA9PSAxKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihYaW5kZXggPCBZaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgZGlyID0gOCAtIGRpcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VsZi5oZXJvLmdldENvbXBvbmVudCgnbXlIZXJvJykuY2hhbmdlRGlyZWN0aW9uKGRpcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oKTtcclxuXHRcdFx0Ly8gY2MubG9nKGN1c3RvbUV2ZW50LFwiPT09PmN1c3RvbUV2ZW50XCIpXHJcbiAgICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiBjdXN0b21FdmVudCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtICsgJyAnICsgY3VzdG9tRXZlbnRbaXRlbV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==