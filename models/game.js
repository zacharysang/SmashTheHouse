var mongoose = require('mongoose')

var gameSchema = new mongoose.Schema({
    gameName: String
    ,players: [{name: String, score: Number}]
});

gameSchema.statics.getGames = function(){
    gameSchema.find({},function(err,data){
        if(err){
            data = [];
        }

        //send out data as result
        

    });
}

module.exports = mongoose.model("Game", gameSchema);