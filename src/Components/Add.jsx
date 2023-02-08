import React, { useRef } from "react";
import { useHistory } from "react-router-dom";


function Add() 
{

	let history = useHistory();
	let category_title = useRef();
	let value = useRef();
	let totalsells = useRef();
	


	let handleAddFood = (e) => {
		e.preventDefault();

		let newFood = {
			category_title: category_title.current.value,
			value: [],
			totalsells: totalsells.current.value
		}

		fetch("http://localhost:4000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newFood)
		})
			.then(() => {
				alert("new fashion added");
				history.goBack();
				// history.push("/")    redirects to home page
			})
	}


	return (
		<div className="add-food">
			<h1>ADDING NEW FASHION</h1>

			<hr />

			<form onSubmit={handleAddFood}>
                <div className>
				<label >Fashion-Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" ref={category_title} /><br />
				{/* <label >Sales in each month &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;</label><input type="number"  ref={value} /><br /> */}
				<label>Total Number of sales &nbsp;:&nbsp;</label> <input type="number"  ref={totalsells} /><br /><br />
				<input type="submit" value="Add Fashiondata" />
                </div>
			</form>
		</div>

	);
}

export default Add;