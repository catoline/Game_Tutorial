var preload = function(game){}

preload.prototype = {
    preload: function(){
        var loadingBar = this.add.sprite(160, 240, "loading");
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.spritesheet("numbers","assets/numbers.png",100, 100);
        this.game.load.image("play","assets/play.png");
        this.game.load.image("gametitle","assets/gametitle.png");
        this.game.load.image("gameover","assets/gameover.png");
        this.game.load.image("lower","assets/lower.png");
        this.game.load.image("higher","assets/higher.png")
    },
    create: function (){
        this.game.state.start("GameTitle")
    }
}