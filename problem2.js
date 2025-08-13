function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const spaceRemove = str.replaceAll(" ", "");
  const finalOutput = spaceRemove.toUpperCase();
  return finalOutput;
}

const character = onlyCharacter(true);
console.log(character);
