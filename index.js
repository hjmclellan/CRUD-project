const { readJSONFile, writeJSONFile } = require("./src/helpers");

const {
    create
} = require("./src/supplyController")

const inform = console.log;
const supplies = readJSONFile("./data/, petSupplies.JSON")

function run(){
    const action = process.argv[2];
    const supply = process.argv[3];

    let writeToFile = false;
    let updatedSupplies = []

    switch(action){
        case "create":
        updatedSupplies = create(supply, supplies);
        writeToFile = true;
        break;
    }
    if (writeToFile) {
        writeJSONFile("./data", "petSupplies.json", updatedSupplies);
      }
}

run();