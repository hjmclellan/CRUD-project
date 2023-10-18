const { readJSONFile, writeJSONFile } = require("./src/helpers");

const {
    index,
    create,
    show
} = require("./src/supplyController")

const inform = console.log;
const supplies = readJSONFile("./data/", "petSupplies.json")

function run(){
    const action = process.argv[2];
    const supply = process.argv[3];

    let writeToFile = false;
    let updatedSupplies = []

    switch(action){
        case "index":
            const suppliesView = index(supplies);
            inform(suppliesView);
            break;
        case "create":
            updatedSupplies = create(supplies, supply);
            writeToFile = true;
            break;
        case "show":
            const supplyView = show(supplies, supply);
            inform(supplyView);
            break;
    }
    if (writeToFile) {
        writeJSONFile("./data", "petSupplies.json", updatedSupplies);
    }
}

run();