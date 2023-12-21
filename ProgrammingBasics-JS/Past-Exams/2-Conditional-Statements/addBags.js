function addBags(input) {
  let luggageOver20Price = Number(input[0]);
  let luggageWeight = Number(input[1]);
  let daysUntilTrip = Number(input[2]);
  let numberOfBags = Number(input[3]);
  price = 0;
  if (luggageWeight < 10) {
    price = luggageOver20Price * 0.20;
  } else if(luggageWeight >= 10 && luggageWeight <= 20) {
    price = luggageOver20Price * 0.50;
  } else {
    price = luggageOver20Price;
  }

  if(daysUntilTrip > 30) {
    price = price * 1.10;
  } else if(daysUntilTrip >=7 && daysUntilTrip <= 30) {
    price = price * 1.15;
  } else {
    price = price * 1.40;
  }

  console.log(`The total price of bags is: ${(price * numberOfBags).toFixed(2)} lv. `);
}

addBags(["30","18","15","2"]);