cc.Class({
    extends: cc.Component,

    properties: {
       
        AnimName : '',
    },
    
    changeDirection: function(dir){
        this.getComponent(cc.Animation).play(this.AnimName + dir);
    },

    onLoad: function () {
        
    },

});
