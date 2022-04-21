require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const budget = require("./models/budget.js");


// Declare middleware
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Declare routes and routers

app.get("/", (req, res) => {
  res.send("Welcome to Budgtr!");
});

// Index route - show all of the expenditures
app.get("/budget/", (req, res) => {
    let color = ''
    let bankAccount = budget.reduce((total, item) => {
      return parseInt(total) + parseInt(item.amount);
    }, 0); 
        if (bankAccount< 0) {
            color = "red";
        } else if (bankAccount>1000){
            color = "green";
        };
        res.render("index.ejs", {budgetAll: budget, bankAccount, color});
});

// New route
app.get("/budget/new", (req, res) => {
    res.render("new.ejs")
})

// show route - show a specific drink
app.get("/budget/:id", (req, res) => {
  res.render("show.ejs", { expenditure: budget[req.params.id] });
});

// Post route
app.post('/budget', (req, res) => {
    // let newEntry = 
    budget.push(req.body);
    // res.send({newEntry});
    res.redirect('/budget'); //send the user back to /budget
});




// Setup listener

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
