const router = require('express').Router()

router.get('/halo', (req, res) => {
    res.json({
        sukses: true,
        pesan : 'berhasil diterima'
    })
})

module.exports = router