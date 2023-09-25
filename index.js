const foodChart = require("./food.json");

// Function to return all food items.

foodChart.forEach(item => console.log("All Food Items:",item))


//function to return all vegetable food items.

function vegetableFoodItems(data) {

    return data.filter(list => list.category === "Vegetable")

}
console.log("Vegitable Food Items :\n", vegetableFoodItems(foodChart));


//function to return all fruits.

function fruitItems(data) {

    return data.filter(list => list.category === "Fruit")

}
console.log("Fruit items :\n", fruitItems(foodChart));


//function to return all proteinItems.

function proteinItems(data) {

    return data.filter(list => list.category === "Protein")

}
console.log("Protein Food Items :\n", proteinItems(foodChart));


//function to return all nuts.

function nutsItem(data) {

    return data.filter(item => item.category === "Nuts")

}
console.log("Nuts :\n", nutsItem(foodChart));


//function to return all grains.

function grains(data) {

    return data.filter(item => item.category === "Grain")

}
console.log("Grains :\n", grains(foodChart))


//function to retuen all dairy products.

function dairyProducts(data) {

    return data.filter(item => item.category === "Dairy")

}
console.log("Dairy Products :\n", dairyProducts(foodChart));


//function to return food items with < 100 calories.

function highCalories(data) {

    return data.filter(item => item.calorie >= 100)

}
console.log("Food Items above 100 calories :\n", highCalories(foodChart));


//function to return food items > 100 calories.

function lowCalories(data) {

    return data.filter(item => item.calorie < 100)

}
console.log("Food Items below 100 calories :\n", lowCalories(foodChart));


// function to arrange food items in Decending order w.r.t proteins.

let highToLow = foodChart.sort((a, b) => b.protiens - a.protiens);
console.log("Foods with high protein to low protein :\n",highToLow)



//function to arrange food items in assending order w.r.t cab.

let lowToHigh = foodChart.sort((a, b) => a.cab - b.cab)
console.log("Foods with low cab to high cab :\n",lowToHigh)
