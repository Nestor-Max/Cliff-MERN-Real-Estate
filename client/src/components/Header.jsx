import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import clifflogocropped from '../images/clifflogocropped.png';

export default function Header() {
	return (
		<header className="bg-blue-200 shadow-md">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<Link to="/">
					<img
						src={clifflogocropped}
						alt="Cliff Logo"
						width="100"
						height="100"
						className="flex flex-wrap"
					/>
				</Link>

				<form className="bg-blue-100 p-3 rounded-lg flex items-center">
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent focus:outline-none w-24 sm:w-64"
					/>
					<FaSearch className="text-blue-700" />
				</form>

				<ul className="flex gap-4">
					<Link to="/">
						<li className="hidden sm:inline text-black hover:underline ">
							Home
						</li>
					</Link>
					<Link to="/about">
						<li className="hidden sm:inline text-black hover:underline">
							About
						</li>
					</Link>
					<Link to="/sign-in">
						<li className=" text-black hover:underline">Sign In</li>
					</Link>
				</ul>
			</div>
		</header>
	);
}
