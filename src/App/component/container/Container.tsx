// import React from 'react'

// import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../../typescript/hook";
import { addToCart } from "../shoppingcart/ShoppingCartSlice";
import { incrementByAmount } from "./counter/counterSlice";
import { data } from "./counter/data";
import classNames from "classnames";

// interface StyleItemData {
// 	albumId: number;
// 	id: number;
// 	title: string;
// 	url: string;
// 	thumbnailUrl: string;
// }

const Container = () => {
	const [dataProducts, setDataProducts] = useState(data);
	// console.log(dataProducts);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const res = await axios.get("http://localhost:3000/api/products");

	// 			setData(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	})();
	// });

	const handleClick = (id: number) => {
		const indexProduct = dataProducts.findIndex((i) => i.id === id);
		const quantity = dataProducts[indexProduct].quantity;
		// console.log(quantity);
		if (quantity > 0) {
			dataProducts[indexProduct].quantity -= 1;
			setDataProducts((preData) => {
				// console.log([dataProducts, preData]);
				return [...preData];
			});
		}
	};
	const dispatch = useAppDispatch();
	return (
		<div className="grid grid-flow-row grid-cols-6 gap-x-2 gap-y-4 w-[1200px] mx-auto">
			{dataProducts.map((item) => (
				<div
					key={item.id}
					className="p-2 bg-orange-400 relative flex flex-col space-y-3 items-center rounded-lg"
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
					<button
						type="button"
						className={classNames({
							"p-[1px] absolute right-1 top-1 text-xs bg-blue-500 rounded-sm text-white":
								true,
							"cursor-not-allowed opacity-50": item.quantity === 0,
						})}
						onClick={() => {
							if (item.quantity > 0) {
								dispatch(incrementByAmount(1));
								dispatch(addToCart({ ...item, quantity: 1 }));
							}
							handleClick(item.id);
						}}
					>
						{item.quantity > 0 ? "ADD" : "Sold Out"}
					</button>
				</div>
			))}
		</div>
	);
};

export default Container;
