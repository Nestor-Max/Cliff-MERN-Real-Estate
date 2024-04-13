const asyncHandler = require('express-async-handler');
// @desc Get user
//// @route GET /api/user
// @access Public

const getUser = asyncHandler(async (req, res) => {
	res.status(200).res.json({
		message: 'Get User',
	});
});

module.exports = {
	getUser,
};
