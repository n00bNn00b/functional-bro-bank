// get all input
function getInputValue(inputId) {
  const userInput = document.getElementById(inputId);
  const inputAmountText = userInput.value;
  const inputAmount = parseFloat(inputAmountText);
  userInput.value = "";
  return inputAmount;
}

// updating deposit and withdraw total
function updateTotalField(totalFieldID, amount) {
  const totalElement = document.getElementById(totalFieldID);
  const totalText = totalElement.innerText;
  const previousDepositTotal = parseFloat(totalText);
  totalElement.innerText = amount + previousDepositTotal;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

// update balance

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// deposit section with balance update
document.getElementById("deposit-btn").addEventListener("click", function (e) {
  const depositAmount = getInputValue("deposit-input");
  if (depositAmount > 0) {
    //   current deposit
    updateTotalField("deposit-total", depositAmount);
    //   update total balance
    updateBalance(depositAmount, true);
  } else {
    alert("Please input valid amount!");
  }
});

// withdraw section with balance update
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  const withdrawAmount = getInputValue("withdraw-input");
  const currentBalace = getCurrentBalance();

  if (withdrawAmount > 0 && withdrawAmount < currentBalace) {
    //   cupdate withdraw total
    updateTotalField("withdraw-total", withdrawAmount);
    //   update balance
    updateBalance(withdrawAmount, false);
  } else if (withdrawAmount > currentBalace) {
    alert("You can not withdraw amount more than you have in your account!");
  } else {
    alert("Please input valid amount!");
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});
