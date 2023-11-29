#turnersrun these commands in terminal
    node npm install express body-parser
    npm install --save-dev jest supertest


#use these endpoint for postman
    /test Endpoint:

    Method: GET
    URL: http://localhost:8002/test
    Expected Response: A JSON response with a test message.
    /calculateValue Endpoint:

    Method: POST
    URL: http://localhost:8002/calculateValue
    Body (raw JSON):
    json
    Copy code
    {
    "model": "YourCarModel",
    "year": 2022
    }
    Expected Response: A JSON response with the calculated car value.
    /calculateRisk Endpoint:

    Method: POST
    URL: http://localhost:8002/calculateRisk
    Body (raw JSON):
    json
    Copy code
    {
    "claim_history": "I had a minor crash last year"
    }
    Expected Response: A JSON response with the calculated risk rating.
    /createQuote Endpoint:

    Method: POST
    URL: http://localhost:8002/createQuote
    Body (raw JSON):
    json
    Copy code
    {
    "car_value": 5000,
    "risk_rating": 3
    }
    Expected Response: A JSON response with the calculated premium.

