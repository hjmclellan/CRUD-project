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



module.exports = {
    index,
    create
}