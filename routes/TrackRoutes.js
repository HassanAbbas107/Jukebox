const express = require("express")
const router = express.Router()
const TrackControler=require("../Controllers/Track")

router.post("/tracks",TrackControler.createTrack)
router.get("/tracks",TrackControler.AllTracks)
router.get("/tracks/:id" , TrackControler.singleTrack)
router.put("/tracks/:id" , TrackControler.UpdateTrack)
router.delete("/tracks/:id",TrackControler.deleTrack )
module.exports=router