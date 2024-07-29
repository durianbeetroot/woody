class dummyProd {
    constructor() {
        // Initialize with some default data
        this.data = [
        {
            name: "Chair Oak",
            description: "Rusty and Woody",
            type: "chair"
        },
        {
            name: "Oak Table",
            description: "Tough and woody",
            type: "table"
        },
        {
            name: "Chair Oak",
            description: "Rusty and Woody",
            type: "chair"
        },
        {
            name: "Oak Table",
            description: "Tough and woody",
            type: "table"
        },
        {
            name: "Chair Oak",
            description: "Rusty and Woody",
            type: "chair"
        },
        {
            name: "Oak Table",
            description: "Tough and woody",
            type: "table"
        },
    ];
    }

    // Method to get the JSON data
    getData() {
        return this.data;
    }
}

export default dummyProd;