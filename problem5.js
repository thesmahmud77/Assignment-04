function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  let totalScore = 0;
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marks.length; i++) {
    const score = marks[i];

    totalScore += score;

    if (score >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  const averageScore = Math.round(totalScore / marks.length);

  return {
    finalScore: averageScore,
    pass: passCount,
    fail: failCount,
  };
}

const findResult = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(findResult);
