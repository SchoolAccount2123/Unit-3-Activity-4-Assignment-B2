// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-11-21
// Fileoverview: This code calculates the car cost when selected options are chosen

//constants for prices
const BASE_PRICE = 25000;
const FLOOR_MATS = 500;
const NAV_SYSTEM = 1000;
const HEATED_SEATS = 500;
const EXTENDED_WARRANTY = 2500;

//function to format the money to 2 decimals
function format(num: number): string {
  return num.toFixed(2);
}

//finction to calculate car price based on user selection

function calculatecarcost(
  floormats: string,
  navsystem: string,
  heatedseats: string,
  warranty: string
): void {
  let totalcost = BASE_PRICE;

  // Floor mats
  if (floormats.toLowerCase() === "yes") {
    console.log(`Floor mats\t\t\t${format(FLOOR_MATS)}`);
    totalcost += FLOOR_MATS;
  }

  // Nav systems
  if (navsystem.toLowerCase() === "yes"){
    console.log(`Navigation system\t\t${format(NAV_SYSTEM)}`);
    totalcost += NAV_SYSTEM;
  }

  //Heated Leather
  if (heatedseats.toLowerCase() === "yes"){
    console.log(`Heated leather seats\t\t${format(HEATED_SEATS)}`);
    totalcost += HEATED_SEATS;
  }

  // Extended Warranty

  if (warranty.toLowerCase() === "yes"){
    console.log(`5-Year extended warranty\t${format(EXTENDED_WARRANTY)}`);
    totalcost += EXTENDED_WARRANTY;
  }

  //Calculate tax
  const tax = totalcost * 0.13;

  console.log(`13% Taxes\t\t\t${format(tax)}`);

  const finalcost = totalcost + tax;
  console.log(`Final cost of car\t\t${format(finalcost)}`);
}

//getting user input for all 4

console.log("\n heated seats + warranty selected \n");

calculatecarcost("no", "no", "yes", "yes");