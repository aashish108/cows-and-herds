const arrayLength: number = 5;

function getRandomIntInclusive(min = 0, max = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateAFarm() {
  return new Array(arrayLength)
    .fill(0)
    .map((_) => new Array(arrayLength).fill(getRandomIntInclusive()));
}

export default generateAFarm;
