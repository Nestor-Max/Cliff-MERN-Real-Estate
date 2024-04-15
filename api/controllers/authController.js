const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @desc Create user
//// @route POST /api/user
// @access Public
const signup = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(401);
		const missingFields = [];
		if (!username) missingFields.push('username');
		if (!email) missingFields.push('email');
		if (!password) missingFields.push('password');
		throw new Error(
			`Please provide all necessary information. Missing fields: ${missingFields.join(
				', '
			)}`
		);
	}

	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(401);
		throw new Error('User already exists');
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		username,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.username,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Error in registration');
	}

	// const newUser = new User({username, email,body})
	// await newUser.save()
	// res.status(201).json({
	//     message:'User registered'
	// })
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30' });
};

module.exports = {
	signup,
};
