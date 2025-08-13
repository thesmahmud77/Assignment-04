function totalFine(fare) {
  if (typeof fare !== "number") {
    return "Invalid";
    // return "Please provide number :";
  } else if (fare <= 0) {
    return "Invalid";
    return "please provide a Positive Number :";
  }
  const rent = fare;
  const fine = (fare * 20) / 100;
  const extraCharge = 30;

  const fines = rent + fine + extraCharge;
  return fines;
}

const mtdFine = totalFine("Gorib tai ticket katinai");
console.log(mtdFine);
