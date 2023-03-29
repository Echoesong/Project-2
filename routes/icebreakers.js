const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

const icebreakersCtrl = require('../controllers/icebreakers')

router.get('/new', icebreakersCtrl.new)

router.get('/', icebreakersCtrl.index)

router.post('/', icebreakersCtrl.create)

// make show page //
//Route for show //
router.get('/:id', icebreakersCtrl.show)

// Route to render Update view
router.get('/:id/edit', icebreakersCtrl.edit)

module.exports = router