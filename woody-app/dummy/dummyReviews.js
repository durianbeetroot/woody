class dummyRev {
    constructor() {
        // Initialize with some default data
        this.data = [
            // Good reviews
            {
                name: "Alice",
                title: "Excellent Product",
                description: "Highly recommend it!",
                sentiment: "Good",
            },
            {
                name: "Bob",
                title: "Very Satisfied",
                description: "Exceeded my expectations.",
                sentiment: "Good",
            },
            {
                name: "Charlie",
                title: "Fantastic",
                description: "Will buy again.",
                sentiment: "Good",
            },
            {
                name: "Diana",
                title: "Great Quality",
                description: "Worth every penny.",
                sentiment: "Good",
            },
            {
                name: "Edward",
                title: "Love It",
                description: "Superb craftsmanship.",
                sentiment: "Good",
            },
            {
                name: "Fiona",
                title: "Amazing",
                description: "Really impressed.",
                sentiment: "Good",
            },
        
            // Bad reviews
            {
                name: "George",
                title: "Very Disappointed",
                description: "Not as described.",
                sentiment: "Bad",
            },
            {
                name: "Helen",
                title: "Poor Quality",
                description: "Broke after one use.",
                sentiment: "Bad",
            },
            {
                name: "Ian",
                title: "Waste of Money",
                description: "Would not recommend.",
                sentiment: "Bad",
            },
        
            // Neutral reviews
            {
                name: "Jack",
                title: "It's Okay",
                description: "Nothing special.",
                sentiment: "Neutral",
            },
            {
                name: "Karen",
                title: "Average",
                description: "Meets basic needs.",
                sentiment: "Neutral",
            },
            {
                name: "Liam",
                title: "Not Bad",
                description: "Could be better.",
                sentiment: "Neutral",
            },
            {
                name: "Mona",
                title: "Fair Enough",
                description: "Serves its purpose.",
                sentiment: "Neutral",
            },
            {
                name: "Nina",
                title: "So-so",
                description: "Just okay.",
                sentiment: "Neutral",
            },
        ];
    }

    // Method to get the JSON data
    getData() {
        return this.data;
    }
}

export default dummyRev;