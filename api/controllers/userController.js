const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Get user
//// @route GET /api/user
// @access Public
const getUser = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Get User',
	});
});

module.exports = {
	getUser,
};
