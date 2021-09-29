//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomInteger(min, max) {
  if (min >=0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return false;
}//Скрипт частично взят с learn.javascript.ru
randomInteger();

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomCoordinates(minCoord, maxCoord, digitsAfter) {
  if (minCoord >=0 && minCoord < maxCoord) {
    const randCoordinates = minCoord + Math.random() * (maxCoord + 1 - minCoord);
    return randCoordinates.toFixed(digitsAfter);
  }
  return false;
}
getRandomCoordinates();
