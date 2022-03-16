export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
}
