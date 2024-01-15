// import React from 'react'

import { Navigate, Outlet, Route } from "react-router-dom";
import Header from "../header/Header";
import Container from "../container/Container";

// type Props = {}

const HomePage = () => {
	return (
		<>
			<div className="bg-orange-500">
				<Header />
			</div>
			<div className="my-4">
				{/* <Container /> */}
				<Navigate to="/container" replace={true} />
				<Outlet />

			</div>
		</>
	);
};

export default HomePage;
