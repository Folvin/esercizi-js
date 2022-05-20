function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; // ora paul non deve piu preoccuparsi che qualcuno vada all'anagrafe e cambi il suo nome
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();