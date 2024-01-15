// import React from "react";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../typescript/hook";
import Logo from "../icon/Logo";
import SearchIcon from "../icon/SearchIcon";
import ShoppingCartIcon from "../icon/ShoppingCartIcon";

// type Props = {};

const Header = () => {
	const counter = useAppSelector((state) => state.counter.value);
	return (
		<header className="flex justify-evenly items-center  py-4 w-[1200px] mx-auto">
			<Link to="container">
				<Logo />
			</Link>
			<div className="flex justify-between items-center p-1 bg-white w-[840px] rounded-md">
				<input
					type="text"
					placeholder="Enter keyword search..."
					className="outline-none px-4 py-2 grow"
				/>
				<div>
					<SearchIcon />
				</div>
			</div>
			<Link
				to="/shoppingcart"
				className="relative bg-white p-[10px] rounded-md"
			>
				<div>
					<ShoppingCartIcon />
				</div>
				<span className="absolute right-[1px] bottom-[-11px] text-blue-500 bg-white rounded-lg">
					{counter}
				</span>
			</Link>
		</header>
	);
};

export default Header;
