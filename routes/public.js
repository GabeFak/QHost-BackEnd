const express = require('express');
const router = express.Router();
const req = require('express/lib/request');
const PublicQuizes = require('../models/PublicQuizes');

// @route  GET api/public
// @desc   Get all public quizes regardless of user or if logged in 
// @access Public
router.get('/', async(req, res) => { 
    try {
        const search = await PublicQuizes.find({isPublished: "Published"}).select('-user');
        res.json(search);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// put requests will transfer over veiw data from the public data 
// add a patch request for incrementing the view count inside of the public quizes. 

module.exports = router;