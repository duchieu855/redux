// import React from 'react'

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../typescript/hook";
// import axios from "axios";
import { fetchProducts } from "./ShoppingCartSlice";

// type Props = {}

const ShoppingCartPage = () => {
	const dataProducts = useAppSelector((state) => state.shoppingCart);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const total = dataProducts?.reduce(
		(total, cur) => cur.price * cur.quantity + total,
		0
	);

	return (
		<>
			<div className="grid grid-flow-row grid-cols-6 gap-x-2 gap-y-4 w-[1200px] mx-auto">
				<div>
					<span>Total: $ {total}</span>
				</div>
				{dataProducts?.map((item) => {
					return (
						<div
							key={item.id}
							className="p-2 relative flex flex-col space-y-3 items-center rounded-lg"
						>
							<div>
								<img
									src={item.thumbnailUrl}
									alt="image-product"
									className="rounded-md"
								/>
							</div>
							<div className="text-red-500 px-2 py-1 rounded-md bg-white  flex justify-evenly space-x-3">
								<span>{item.title}</span>
								<span>${item.price}</span>
								<span>Total: {item.quantity}</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShoppingCartPage;
