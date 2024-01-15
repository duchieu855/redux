import { createBrowserRouter } from "react-router-dom";

import ShoppingCartPage from "../component/shoppingcart/ShoppingCartPage";
import Container from "../component/container/Container";
import HomePage from "../component/homepage/HomePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{
				path: "shoppingcart",
				element: <ShoppingCartPage />,
			},
			{
				path: "container",
				element: <Container />,
			},
		],
	},
]);
