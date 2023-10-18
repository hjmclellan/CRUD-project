const { nanoid } = require('nanoid');

const supplyPrice = require('../data/prices.json');
// const petSupplies = require('../data/petSupplies.json');


function index(supplies) {
    return supplies.map((supply) => supply.id + ' ' + supply.name).join('\n');
}

function create(supplies, supplyType) {
    if(!supplyType){
        console.log("Error, include the name of your supply please")
    } else {
        const supply = {
            name: supplyType,
            id: nanoid(4),
            priceInCents: supplyPrice[supplyType] || 1500
        };
        supplies.push(supply);
        return supplies;
    }
}

function show(supplies, supplyID) {
    const supply = supplies.find((supply) => supply.id === supplyID);
    if(supply === undefined){
        return "Sorry, a pet supply with that ID was not found"
    } else {
        return `${supply.name}'s price is: $${(((supply.priceInCents)/100).toFixed(2))} and it's ID is ${supply.id}`
    }
  }



module.exports = {
    index,
    create,
    show
}