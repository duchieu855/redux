// import React from 'react'

// import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../typescript/hook";
import { incrementByAmount } from "./counter/counterSlice";
import { data } from "./counter/data";
import classNames from "classnames";
import { addToCart } from "../shoppingcart/slice/product-list-slice";
import { fetchData } from "./slice/listSlice";
import { RootState } from "@reduxjs/toolkit/query";

// interface StyleItemData {
// 	albumId: number;
// 	id: number;
// 	title: string;
// 	url: string;
// 	thumbnailUrl: string;
// }

const Container = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.list)
	useEffect(() => {
		dispatch(fetchData())
	}, [])

	const handleClick = (id: number) => {
		const indexProduct = state.findIndex((i) => i.id === id);
		const quantity = state[indexProduct].quantity;

	};
	return (
		<div className="grid grid-flow-row grid-cols-6 gap-x-2 gap-y-4 w-[1200px] mx-auto">
			{state.map((item) => (
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
