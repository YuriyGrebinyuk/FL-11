// Your code goes here
if (confirm('Do you want to play a game?')) {
  const FOUR = 4;
  const TWO = 2;
  let minValue = 0;
  let maxValue = 8;
  let initialMaxValue = 8;
  let x = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  let userChoise;
  let initialAttempts = 3;
  let attempts = 3;
  let stepCount;
  let totalPrize = 0;
  let currentPrize = 0;
  let maxPrize = 100;
  let prizesArray = [maxPrize, maxPrize / TWO, maxPrize / FOUR];
  let winMultiplier = 1;

  for (stepCount = 1; stepCount <= initialAttempts; stepCount++ ) {
    currentPrize = prizesArray[stepCount-1] * winMultiplier;
    let chooseText = `Choose a roulette pocket number from ${minValue} to ${maxValue}`;
    let attemptsText = `Attempts left: ${attempts--}`;
    let totalPrizeText = `Total prize: ${totalPrize}$`;
    let possiblePrizeText = `Possible prize on current attempt: ${currentPrize}$`;

    userChoise = prompt(`${chooseText}\n${attemptsText}\n${totalPrizeText}\n${possiblePrizeText}`);
    if(userChoise && +userChoise === x) {
      totalPrize += currentPrize;
      if (confirm('Congratulation, you won! Your prize is: ' + totalPrize +'$. ' + 'Do you want to continue?')) {
        maxValue += FOUR;
        x = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        attempts = initialAttempts;
        stepCount = 0;
        winMultiplier *= TWO;
      } else {
        alert('Thank you for your participation. Your prize is '+ totalPrize +'$.');
        if (confirm('Do you want to play again?')) {
          maxValue = initialMaxValue;
          x = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
          attempts = initialAttempts;
          stepCount = 0;
          totalPrize = 0;
          winMultiplier = 1;
        } else {
          break;
        }
      }
    } else {
      if(stepCount === initialAttempts) {
        totalPrize = 0;
        alert('Thank you for your participation. Your prize is '+ totalPrize +'$.');
        if (confirm('Do you want to play again?')) {
          maxValue = initialMaxValue;
          x = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
          attempts = initialAttempts;
          stepCount = 0;
          winMultiplier = 1;
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
