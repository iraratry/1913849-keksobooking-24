const AVATAR = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
];
const TITLE = [
  'Первый заголовок',
  'Второй заголовок',
  'Третий заголовок',
];
const TYPE = [
  'place',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKINOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'Первое описание',
  'Второе описание',
  'Третье описание',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomCoordinates (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const createLocation =  () => {
  return {
    lat: Number(getRandomCoordinates(35.65000, 35.70000, 5)),
    lng: Number(getRandomCoordinates(139.70000, 139.80000, 5)),
  };
};

const createAuthor = () => {
  const randomAvatarIndex = randomInteger(0, AVATAR.length - 1);
  return {
    avatar: 'img/avatars/user' + AVATAR[randomAvatarIndex] + '.png',
  };
};

const createOffer = () => {
  const randomTitleIndex = randomInteger(0, TITLE.length - 1);
  const randomTypeIndex = randomInteger(0, TYPE.length -1);
  const randomCheckInIndex = randomInteger(0, CHECKINOUT.length -1);
  const randomCheckOutIndex = randomInteger(0, CHECKINOUT.length -1);
  const randomFeaturesIndex = randomInteger(0, FEATURES.length -1);
  const randomDescriptionIndex = randomInteger(0, DESCRIPTION.length -1);
  const randomPhotosIndex = randomInteger(0, PHOTOS.length -1);

  return {
    title: TITLE[randomTitleIndex],
    address: createLocation,
    price: randomInteger(),
    type: TYPE[randomTypeIndex],
    rooms: randomInteger(),
    quests: randomInteger(),
    checkin: CHECKINOUT[randomCheckInIndex],
    checkout: CHECKINOUT[randomCheckOutIndex],
    features: Array.from({length: randomInteger(1, FEATURES.length)}, FEATURES[randomFeaturesIndex]),
    desctiption: DESCRIPTION[randomDescriptionIndex],
    photos: Array.from({length: randomInteger(1, PHOTOS.length)}, PHOTOS[randomPhotosIndex]),
  };
};

const createAnnouncement = () => {
  return {
    author: createAuthor,
    offer: createOffer,
    location: createLocation,
  };
};

const similarAnnouncements = Array.from({length: 10}, createAnnouncement);
