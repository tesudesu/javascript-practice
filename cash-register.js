function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalInRegister = 0;
    for (let i = 0; i < cid.length; i++) {
      totalInRegister += cid[i][1];
    }
    // If change is equal to the total amount in register, return this immediately.
    if (change === Math.round(totalInRegister * 100)/100) {
      return {status: "CLOSED", change: cid};
    }
    // If change is more than the total in register, return this immediately.
    if (change > Math.round(totalInRegister * 100)/100) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    let changeArr = [];
    let changeAfter100 = 0;
    let changeAfter20 = 0;
    let changeAfter10 = 0;
    let changeAfter5 = 0;
    let changeAfter1 = 0;
    let changeAfterQuarter = 0;
    let changeAfterDime = 0;
    let changeAfterNickel = 0;
    let changeAfterPenny = 0;
  
    // If change is $100 or over, and there are enough $100 bills available for the change required, push to changeArr the change given in $100 bills. 
    // If there are not enough $100 bills for the change required but there is at least one $100 bill in the register, push to changeArr the total amount in $100 bills there is in the register. 
    // After calculating the change in $100 bills, save the remaining change in changeAfter100. 
    // If there are no $100 bills in the register or change is less than $100, save the change directly in changeAfter100. 
    // changeAfter100 will be passed as the starting amount for the next biggest currency unit ($20 bill).
    
    if (change >= 100 && cid[8][1] >= (Math.floor(change/100) * 100)) {
      changeArr.push(["ONE HUNDRED", Math.floor(change/100) * 100]);
      changeAfter100 = Math.round((change % 100) * 100)/100;
    } else if (change >= 100 && cid[8][1] !== 0) {
      changeArr.push(["ONE HUNDRED", cid[8][1]]);
      changeAfter100 = Math.round((change - cid[8][1]) * 100)/100;
    } else {
      changeAfter100 = change;
    }
  
    // Repeat above logic for each currency unit. 
    if (changeAfter100 >= 20 && cid[7][1] >= (Math.floor(changeAfter100/20) * 20)) {
      changeArr.push(["TWENTY", Math.floor(changeAfter100/20) * 20]);
      changeAfter20 = Math.round((changeAfter100 % 20) * 100)/100;
    } else if (changeAfter100 >= 20 && cid[7][1] !== 0) {
      changeArr.push(["TWENTY", cid[7][1]]);
      changeAfter20 = Math.round((changeAfter100 - cid[7][1]) * 100)/100;
    } else {
      changeAfter20 = changeAfter100;
    } 
  
    if (changeAfter20 >= 10 && cid[6][1] >= (Math.floor(changeAfter20/10) * 10)) {
      changeArr.push(["TEN", Math.floor(changeAfter20/10) * 10]);
      changeAfter10 = Math.round((changeAfter20 % 10) * 100)/100;
    } else if (changeAfter20 >= 10 && cid[6][1] !== 0) {
      changeArr.push(["TEN", cid[6][1]]);
      changeAfter10 = Math.round((changeAfter20 - cid[6][1]) * 100)/100;
    } else {
      changeAfter10 = changeAfter20;
    }   
  
    if (changeAfter10 >= 5 && cid[5][1] >= (Math.floor(changeAfter10/5) * 5)) {
      changeArr.push(["FIVE", Math.floor(changeAfter10/5) * 5]);
      changeAfter5 = Math.round((changeAfter10 % 5) * 100)/100;
    } else if (changeAfter10 >= 5 && cid[5][1] !== 0) {
      changeArr.push(["FIVE", cid[5][1]]);
      changeAfter5 = Math.round((changeAfter10 - cid[5][1]) * 100)/100;
    } else {
      changeAfter5 = changeAfter10;
    }
  
    if (changeAfter5 >= 1 && cid[4][1] >= (Math.floor(changeAfter5/1) * 1)) {
      changeArr.push(["ONE", Math.floor(changeAfter5/1) * 1]);
      changeAfter1 = Math.round((changeAfter5 % 1) * 100)/100;
    } else if (changeAfter5 >= 1 && cid[4][1] !== 0) {
      changeArr.push(["ONE", cid[4][1]]);
      changeAfter1 = Math.round((changeAfter5 - cid[4][1]) * 100)/100;
    } else {
      changeAfter1 = changeAfter5;
    }
  
    if (changeAfter1 >= 0.25 && cid[3][1] >= (Math.floor(changeAfter1/0.25) * 0.25)) {
      changeArr.push(["QUARTER", Math.floor(changeAfter1/0.25) * 0.25]);
      changeAfterQuarter = Math.round((changeAfter1 % 0.25) * 100)/100;
    } else if (changeAfter1 >= 0.25 && cid[3][1] !== 0) {
      changeArr.push(["QUARTER", cid[3][1]]);
      changeAfterQuarter = Math.round((changeAfter1 - cid[3][1]) * 100)/100;
    } else {
      changeAfterQuarter = changeAfter1;
    }  
  
    if (changeAfterQuarter >= 0.1 && cid[2][1] >= (Math.floor(changeAfterQuarter/0.1) * 0.1)) {
      changeArr.push(["DIME", Math.floor(changeAfterQuarter/0.1) * 0.1]);
      changeAfterDime = Math.round((changeAfterQuarter % 0.1) * 100)/100;
    } else if (changeAfterQuarter >= 0.1 && cid[2][1] !== 0) {
      changeArr.push(["DIME", cid[2][1]]);
      changeAfterDime = Math.round((changeAfterQuarter - cid[2][1]) * 100)/100;
    } else {
      changeAfterDime = changeAfterQuarter;
    }
  
    if (changeAfterDime >= 0.05 && cid[1][1] >= (Math.floor(changeAfterDime/0.05) * 0.05)) {
      changeArr.push(["NICKEL", Math.floor(changeAfterDime/0.05) * 0.05]);
      changeAfterNickel = Math.round((changeAfterDime % 0.05) * 100)/100;
    } else if (changeAfterDime >= 0.05 && cid[1][1] !== 0) {
      changeArr.push(["NICKEL", cid[1][1]]);
      changeAfterNickel = Math.round((changeAfterDime - cid[1][1]) * 100)/100;
    } else {
      changeAfterNickel = changeAfterDime;
    }
  
    if (changeAfterNickel >= 0.01 && cid[0][1] >= (Math.floor(changeAfterNickel/0.01) * 0.01)) {
      changeArr.push(["PENNY", Math.floor(changeAfterNickel/0.01) * 0.01]);
      changeAfterPenny = Math.round((changeAfterNickel % 0.01) * 100)/100;
    } else if (changeAfterNickel >= 0.01 && cid[0][1] !== 0) {
      changeArr.push(["PENNY", cid[0][1]]);
      changeAfterPenny = Math.round((changeAfterNickel - cid[0][1]) * 100)/100;
    } else {
      changeAfterPenny = changeAfterNickel;
    }
    // changeAfterPenny is the final change remaining after going through all the bills and coins. 
    // If there is sufficient funds for the exact change, it should equal 0.
  
    if (changeAfterPenny === 0) {
      return {status: "OPEN", change: changeArr};
    } else {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }
  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); 
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// {status: "INSUFFICIENT_FUNDS", change: []}
  
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}