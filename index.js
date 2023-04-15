function scuberGreetingForFeet(value){
  // Write your code here!
  let return_value;
  if (value <= 400) {
    return_value = "This one is on me!";
  }
  else if (value > 400 && value <= 2000){
    return_value = "That will be twenty bucks.";
  }
  else if (value > 2000 && value < 2500){
    return_value = "I will gladly take your thirty bucks.";
  }
  else {
    return_value = "No can do.";
  }
  return return_value;
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  let return_value;
  switch (tip) {
    case 'generous':
      return_value = "Thank you so much.";
      break;
    case 'not as generous':
      return_value = 'Thank you.';
      break;

    default:
      return_value = "Bye."
      break;
  }
  return return_value;
}
