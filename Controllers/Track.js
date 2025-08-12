const Track = require('../Models/Track')


async function createTrack(req,res) {
    try {
        const created = await Track.create(req.body)
        res.status(201).json(created)
    } catch (error) {
         res.status(500).json({error:error.message  })
    }
}


async function AllTracks(req,res) {
    try {     const  all = await Track.find()
                res.status(201).json(all)
    } catch (error) {
        res.status(500).json({error:error.message  })

    }
}
async function singleTrack(req,res) {
    
    try {
       const oneTrack = await Track.findById(req.params.id)
          res.status(200).json(oneTrack)

    } catch (error) {
            res.status(500).json({error:error.message  })

    }
}
async function UpdateTrack(req,res) {
    try {
        const Utrack = await Track.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
                  res.status(200).json(Utrack)

    } catch (error) {
        res.status(500).json({error:error.message  })

    }
}
async function deleTrack(req,res) {
    try {
        const dTrack = Track.findByIdAndDelete(req.params.id)
    } catch (error) {
    res.status(500).json({error:error.message  })
    }
}

module.exports={
createTrack,
AllTracks,
singleTrack,
UpdateTrack,
deleTrack
}