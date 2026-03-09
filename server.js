const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/advice", (req, res) => {
    const problem = req.body.problem.toLowerCase();
    let advice = "";

    if (problem.includes("stress")) {
        advice = "Practice meditation and deep breathing for 10 minutes.";
    } 
    else if (problem.includes("sleep")) {
        advice = "Maintain a regular sleep schedule and avoid mobile before bed.";
    } 
    else if (problem.includes("diet")) {
        advice = "Eat fruits, vegetables and drink plenty of water.";
    } 
    else if (problem.includes("exercise")) {
        advice = "Try walking, yoga, or light cardio daily.";
    } 
    else {
        advice = "Stay active, eat healthy food and maintain mental wellness.";
    }

    res.json({ advice });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});