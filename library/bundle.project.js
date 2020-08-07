require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myApp":[function(require,module,exports){
cc._RFpush(module, 'b6154hikatLCLj6RGQ/tqOv', 'myApp');
// script\myApp.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        hero: {
            'default': null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        var self = this;
        self.node.on('mouseup', function (event) {

            var visibleSize = cc.director.getVisibleSize();

            var Xindex = Math.floor(event.getLocationX() * 3 / visibleSize.width);
            var Yindex = 2 - Math.floor(event.getLocationY() * 3 / visibleSize.height);

            var dir = Xindex + Yindex;

            if (Xindex == 1 && Yindex == 1) return;

            if (Xindex < Yindex) {
                dir = 8 - dir;
            }

            self.hero.getComponent('myHero').changeDirection(dir);

            var customEvent = new cc.Event.EventCustom();

            for (var item in customEvent) {
                console.log(item + ' ' + customEvent[item]);
            }
        });
    }

});

cc._RFpop();
},{}],"myHero":[function(require,module,exports){
cc._RFpush(module, '7ca27vQcdtMc4HtI1wyQeFI', 'myHero');
// script\myHero.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {

        AnimName: ''
    },

    changeDirection: function changeDirection(dir) {
        this.getComponent(cc.Animation).play(this.AnimName + dir);
    },

    onLoad: function onLoad() {}

});

cc._RFpop();
},{}]},{},["myHero","myApp"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6L0NvY29zLUNyZWF0ZXIvUm9vdC9kaXN0L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL3NjcmlwdC9teUFwcC5qcyIsImFzc2V0cy9zY3JpcHQvbXlIZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2I2MTU0aGlrYXRMQ0xqNlJHUS90cU92JywgJ215QXBwJyk7XG4vLyBzY3JpcHRcXG15QXBwLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBoZXJvOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5ub2RlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciB2aXNpYmxlU2l6ZSA9IGNjLmRpcmVjdG9yLmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgICAgIHZhciBYaW5kZXggPSBNYXRoLmZsb29yKGV2ZW50LmdldExvY2F0aW9uWCgpICogMyAvIHZpc2libGVTaXplLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBZaW5kZXggPSAyIC0gTWF0aC5mbG9vcihldmVudC5nZXRMb2NhdGlvblkoKSAqIDMgLyB2aXNpYmxlU2l6ZS5oZWlnaHQpO1xuXG4gICAgICAgICAgICB2YXIgZGlyID0gWGluZGV4ICsgWWluZGV4O1xuXG4gICAgICAgICAgICBpZiAoWGluZGV4ID09IDEgJiYgWWluZGV4ID09IDEpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKFhpbmRleCA8IFlpbmRleCkge1xuICAgICAgICAgICAgICAgIGRpciA9IDggLSBkaXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuaGVyby5nZXRDb21wb25lbnQoJ215SGVybycpLmNoYW5nZURpcmVjdGlvbihkaXIpO1xuXG4gICAgICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBjdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gKyAnICcgKyBjdXN0b21FdmVudFtpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnN2NhMjd2UWNkdE1jNEh0STF3eVFlRkknLCAnbXlIZXJvJyk7XG4vLyBzY3JpcHRcXG15SGVyby5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBBbmltTmFtZTogJydcbiAgICB9LFxuXG4gICAgY2hhbmdlRGlyZWN0aW9uOiBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oZGlyKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSh0aGlzLkFuaW1OYW1lICsgZGlyKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
