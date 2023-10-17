let age = 23;
let dayOfTheWeek = "Tuesday";


  if(age < 2) {
    price = 0;
  }
  else if(age < 13){
    price = 5;
  }
  else if(age > 64) {
    price = 6;
  }
  else {
    price = 8;
  }
  if (dayOfTheWeek === "Tuesday"){
    price = price / 2;
  }
  console.log("The Ticket Price is: $" + price);

  