//location, bio, experiences, education, social network links etc.
const express = require('express');
const router = express.Router();

// @route   GET api/profiles/tests
// @desc    Tests profiles route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

module.exports = router;
