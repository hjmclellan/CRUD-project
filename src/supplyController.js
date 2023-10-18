const { nanoid } = require('nanoid');

const supplyPrice = require('../data/prices.json');

function create(supplies, supplyType) {
  const supply = {
    name: supplyType,
    id: nanoid(4),
    priceInCents: prices[supplyType] || 15
  };
  supplies.push(supply);
  return supplies;
}

module.exports = {
    create
}