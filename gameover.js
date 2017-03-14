var gameover = function(game){}

gameover.prototype = {
    init: function (score){
        alert("You scored: "+ score);
    },
    
    create: function (){
        var gameover = this.add.sprite(160, 160, "gameover")
        gameover.anchor.setTo(0.5,0.5);
    
        var playButton = this.game.add.button(160, 320, "play", this.playTheGame,this);
},

    playTheGame: function (){
        this.game.state.start("Game")
    },
}