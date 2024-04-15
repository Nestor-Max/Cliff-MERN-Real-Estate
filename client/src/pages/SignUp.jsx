import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
	const [formData, setFormData] = useState({});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id.toLowerCase()]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/apk/api/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(`Error getting the contents ${error.message}`);
		}
	};

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					className="border p-3 rounded-lg "
					id="username"
					onChange={handleChange}
				/>
				<input
					type="email"
					placeholder="Email"
					className="border p-3 rounded-lg "
					id="email"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border p-3 rounded-lg "
					id="password"
					onChange={handleChange}
				/>
				<button className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-80">
					Sign Up
				</button>
				<button className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-80">
					Continue with Google
				</button>
			</form>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to={'/sign-in'}>
					<span className="text-blue-700">Sign In</span>
				</Link>
			</div>
		</div>
	);
}
