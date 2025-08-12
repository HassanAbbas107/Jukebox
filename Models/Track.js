const {Schema , model}= require("mongoose")

const TrackSchema =new Schema({
    title:{Type:String ,
        required:true
    },
    artist:{
        type:String,
        required:true
    }

})
const Track = model('Track',TrackSchema)
module.exports = Track
