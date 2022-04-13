const budget = require("../models/budget");

// const document = "/views/index.ejs";

// $(document).ready(function () {
//   const balanceBox = document.getElementsByClassName("total");
//   let bankAccount = document.createElement("div");
//   bankAccount.className = "netAmount";
//   let message = document.createElement("div");
//   message.className = "message";

  bankAccount = 0;

  for (let i = 0; i < budget.length; i++) {
    bankAccount += budget[i].amount;
  }

//   balanceBox.append(bankAccount, message);
  console.log(bankAccount)
// });
