// Import express library and setup server
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const { calculateValue, calculateRisk, createQuote } = require("./utils");

server.use(bodyParser.json());



// Allow a test route and response to ensure connection and operation between testing and server
server.use("/test", (req, res) => {
    // .use to allow both post and get
    const testResponse = "You're receiving a response!";
    res.json(testResponse);
});


// API1 to find the value of the car
server.post("/calculateValue", (req, res) => {
    const { model, year } = req.body;
    if (typeof model !== "string" || typeof year !== "number" || year < 0) {
        return res.status(400).json({ error: "Invalid input for model or year" });
    }
    try {
        const carValue = calculateValue(model, year);
        res.json({ car_value: carValue });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// API2 to convert claim history to a risk rating
server.post("/calculateRisk", (req, res) => {
    const { claim_history } = req.body;

    try {
        const riskResult = calculateRisk(claim_history);
        res.json({ risk_rating: riskResult });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});



// API3 to convert car_value and risk_rating to a quote
server.post("/createQuote", (req, res) => {
    const { car_value, risk_rating } = req.body;
    if (typeof car_value !== "number" || typeof risk_rating !== "number") {
        return res.status(400).json({ error: "Invalid input for car_value or risk_rating" });
    }
    try {
        const premium = createQuote(car_value, risk_rating);
        res.json(premium);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});




module.exports = server;