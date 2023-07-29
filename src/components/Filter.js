import React from "react";

function Filter({ onCategoryChange }){
    return(
    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    </div>
    )
}

export default Filter;

// You will need to pass a callback function as a prop called 
// onCategoryChange to the Filter component in order for the 
// test to pass.