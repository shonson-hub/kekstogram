import {getRandomInt} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const DESCRIPTIONS = [
  'от так вот',
  'хуйня',
  'нормик',
  'и так могу',
  'и сяк могу'
]

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const LIKES = {
  min: 15,
  max: 200,
}

const Comments = {
  min: 1,
  max: 5,
}

const OBJECTS = {
  min: 1,
  max: 25,
}

let MESSAGES = []

const CARD_COUNT = 25;

const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInt(Comments.min, Comments.max); i++) {
    comments.push(
      {
        id: getRandomInt(0, 888),
        avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
        message: COMMENTS[getRandomInt(0, COMMENTS.length - 1)],
        name: NAMES[getRandomInt(0, NAMES.length - 1)],
      });
  }
  return comments;
};

const newObject = () => {
  const randomId = getRandomInt(OBJECTS.min, OBJECTS.max)
  const randomPhoto = getRandomInt(OBJECTS.min, OBJECTS.max)

  return {
    id: randomId,
    photo: '../photos/' + randomPhoto + '.jpg',
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInt(LIKES.min, LIKES.max),
    comments: addComments(),
  }
}


// export const cardObjects = new Array(CARD_COUNT).fill(null).map(() => newObject())

export const cardObjects = () => {
  return new Array(CARD_COUNT).fill(null).map(() => newObject())
}
