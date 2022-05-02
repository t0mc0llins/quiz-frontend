function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const shuffleAnswers = (wrongAnswers, rightAnswers) => {
  let answers = [[], [], [], []];
  for (let i = 0; 4 > i; i++) {
    let a = wrongAnswers[i].concat(rightAnswers[i]);
    shuffle(a);
    answers[i] = a;
  }
  return answers;
};
