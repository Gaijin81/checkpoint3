const express = require("express")
const albumController = require("./controllers/album.controller")
const router = express.Router()

router.get("/", albumController.getAlbums)
router.get("/:id", albumController.getAlbum)
router.get("/:id/tracks", albumController.getAlbumTracks)
router.post("/", albumController.postAlbum)
router.put("/:id", albumController.putAlbum)
router.delete("/:id", albumController.deleteAlbum)

module.exports = router;