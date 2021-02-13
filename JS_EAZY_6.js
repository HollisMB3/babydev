// FUNCTIONS are a piece of code with a name that you can refer to later in the code
const taxRate = 0.04;
// ADVICE ON WHAT TO LEARN // 
// Data Structures and algorythms 
// Write a piece of fucking software 
// Part Time fucking Job 
// Change Jobs 1 to 2 years 
// Value as a Dev skyrockest 1-5 years 
// Expect a lot of feedback and critique 
// When you get feedback DETACH and be nonjudgemental 
// How can I improve myself 
// Never Stop Learning // GET COMFORTABLE WITH BEING UNCOMFORTABLE // 
// People make work enjoyable // 

// to make a function you can say 
const getNoodlesTotal = function() {
    const noodlesPrice = 1.99;
    const noodlesTotal = noodlesPrice + noodlesPrice * taxRate; 
    return noodlesTotal;
}
// Now go down to where you want to know the price of noodles and type 
const getPepperoniTotal = function() {
const pepperoniPrice = 3;
const pepperoniTotal = pepperoniPrice + pepperoniPrice * taxRate;
return pepperoniTotal;
}

const getCheeseTotal = function() {
const cheesePrice = 4;
const cheeseTotal = cheesePrice + cheesePrice * taxRate;
return cheeseTotal;
}

const getBreadTotal = function() {
const breadPrice = 2.3;
const breadTotal = breadPrice + breadPrice * taxRate;
return breadTotal;
}

const getBeansTotal = function() {
const beansPrice = 1.23;
const beansTotal = beansPrice + beansPrice * taxRate;
return beansTotal;
}
const getMarshmallowsTotal = function() {
const marshmallowsPrice = 1.23;
const marshmallowsTotal = marshmallowsPrice + marshmallowsPrice * taxRate;
return marshmallowsTotal;
}


// or somehow multiply each times 1.04% 

// noodles total invoking function 
const noodlesTotal = getNoodlesTotal(); // js will run the code and run the return command  


const grandTotal = noodlesTotal +
      pepperoniTotal +
      cheeseTotal +
      beansTotal +
      breadTotal +
      marshmallowsTotal +

console.log(noodlesTotal);
