
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/script/myApp');
require('./assets/script/myHero');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/myHero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxteUhlcm8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJBbmltTmFtZSIsImNoYW5nZURpcmVjdGlvbiIsImRpciIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsInBsYXkiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxRQUFRLEVBQUc7QUFGSCxHQUhQO0FBUUxDLEVBQUFBLGVBQWUsRUFBRSx5QkFBU0MsR0FBVCxFQUFhO0FBQzFCLFNBQUtDLFlBQUwsQ0FBa0JQLEVBQUUsQ0FBQ1EsU0FBckIsRUFBZ0NDLElBQWhDLENBQXFDLEtBQUtMLFFBQUwsR0FBZ0JFLEdBQXJEO0FBQ0gsR0FWSTtBQVlMSSxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkI7QUFkSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICAgICAgQW5pbU5hbWUgOiAnJyxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNoYW5nZURpcmVjdGlvbjogZnVuY3Rpb24oZGlyKXtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkodGhpcy5BbmltTmFtZSArIGRpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3f25oSApFOXqdc9Pu1hgNu', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
