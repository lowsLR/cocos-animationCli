
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