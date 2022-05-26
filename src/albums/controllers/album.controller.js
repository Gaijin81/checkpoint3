const albumModel = require("../models/album.model")

class AlbumController {
    async getAlbums(req, res) {
        try {
            const getAlbums = await albumModel.getAlbums()
            res.status(200).json(getAlbums)

        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    async getAlbum(req, res) {
        try {
            const getAlbum = await albumModel.getAlbum(req.params.id)
            res.status(200).json(getAlbum)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }


    async getAlbumTracks(req, res) {
        try {
            const getAlbumTracks = await albumModel.getAlbumTracks(req.params.id)
            res.status(200).json(getAlbumTracks)

        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    async postAlbum(req, res) {
        try {
            const postAlbum = await albumModel.postAlbum(req.body)
            res.status(201).json(postAlbum)

        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    async putAlbum(req, res) {
        try {
            const putAlbum = await albumModel.putAlbum(req.body, req.params.id)
            res.status(204).json(putAlbum)

        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

    async deleteAlbum(req, res) {
        try {
            const deleteAlbum = await albumModel.deleteAlbum(req.params.id)
            res.status(204).json(deleteAlbum)

        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }

}

module.exports = new AlbumController();