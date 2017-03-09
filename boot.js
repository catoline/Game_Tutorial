var boot = function(){}

boot.prototype = {
    
    preload: function() {
        //loading my loading bar
        this.game.load.image("loading","assets/loading.png");
    } ,
    
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.refresh();
        
        this.game.state.start("Preload")
        
    }
    
    
}