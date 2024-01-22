// import React from 'react'

// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../typescript/hook";
// import Skeleton from "react-loading-skeleton";
import { addProduct } from "../shoppingcart/ShoppingCartSlice";
import { incrementByAmount } from "./counter/counterSlice";
import classNames from "classnames";
import {
	// fetchProductList,
	loadProductList,
	updateProductList,
} from "./counter/fetchProductList";
// import { useGetDataContainerQuery } from "./fetchDataProduct";
// import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../typescript/hook";

const Container = () => {
	const data = useAppSelector((state) => state.fetchProductList);
	let dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(fetchProductList());
	// }, []);
	// const { data, isLoading } = useGetDataContainerQuery([]);

	return (
		<div className="grid grid-flow-row grid-cols-6 gap-x-2 gap-y-4 w-[1200px] mx-auto">
			{/* {isLoading && (
				<Fragment>
					<Skeleton></Skeleton>
				</Fragment>
			)} */}
			{data?.map((item) => (
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
								dispatch(addProduct(item));
								dispatch(updateProductList(item.id));
								dispatch(loadProductList());
							}
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
