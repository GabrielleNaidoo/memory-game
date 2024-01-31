
const cardData = [
  // clubs
  {
    id: 1,
    value: 'a',
    suit: 'clubs',
    image: import("./images/card-images/clubs/a.jpg"),
    flipped: false
  },
  {
    id: 2,
    value: '2',
    suit: 'clubs',
    image: import("./images/card-images/clubs/2.jpg"),
    flipped: false
  },
  {
    id: 3,
    value: '3',
    suit: 'clubs',
    image: import("./images/card-images/clubs/3.jpg"),
    flipped: false
  },
  {
    id: 4,
    value: '4',
    suit: 'clubs',
    image: import("./images/card-images/clubs/4.jpg"),
    flipped: false
  },
  {
    id: 5,
    value: '5',
    suit: 'clubs',
    image: import("./images/card-images/clubs/5.jpg"),
    flipped: false
  },
  {
    id: 6,
    value: '6',
    suit: 'clubs',
    image: import("./images/card-images/clubs/6.jpg"),
    flipped: false
  },
  {
    id: 7,
    value: '7',
    suit: 'clubs',
    image: import("./images/card-images/clubs/7.jpg"),
    flipped: false
  },
  {
    id: 8,
    value: '8',
    suit: 'clubs',
    image: import("./images/card-images/clubs/8.jpg"),
    flipped: false
  },
  {
    id: 9,
    value: '9',
    suit: 'clubs',
    image: import("./images/card-images/clubs/9.jpg"),
    flipped: false
  },
  {
    id: 10,
    value: '10',
    suit: 'clubs',
    image: import("./images/card-images/clubs/10.jpg"),
    flipped: false
  },
  {
    id: 11,
    value: 'jack',
    suit: 'clubs',
    image: import("./images/card-images/clubs/jack.jpg"),
    flipped: false
  },
  {
    id: 12,
    value: 'queen',
    suit: 'clubs',
    image: import("./images/card-images/clubs/queen.jpg"),
    flipped: false
  },
  {
    id: 13,
    value: 'king',
    suit: 'clubs',
    image: import("./images/card-images/clubs/king.jpg"),
    flipped: false
  },
  // diamonds
  {
    id: 14,
    value: 'a',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/a.jpg"),
    flipped: false
  },
  {
    id: 15,
    value: '2',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/2.jpg"),
    flipped: false
  },
  {
    id: 16,
    value: '3',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/3.jpg"),
    flipped: false
  },
  {
    id: 17,
    value: '4',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/4.jpg"),
    flipped: false
  },
  {
    id: 18,
    value: '5',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/5.jpg"),
    flipped: false
  },
  {
    id: 19,
    value: '6',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/6.jpg"),
    flipped: false
  },
  {
    id: 20,
    value: '7',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/7.jpg"),
    flipped: false
  },
  {
    id: 21,
    value: '8',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/8.jpg"),
  },
  {
    id: 22,
    value: '9',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/9.jpg"),
    flipped: false
  },
  {
    id: 23,
    value: '10',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/10.jpg"),
    flipped: false
  },
  {
    id: 24,
    value: 'jack',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/jack.jpg"),
    flipped: false
  },
  {
    id: 25,
    value: 'queen',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/queen.jpg"),
    flipped: false
  },
  {
    id: 26,
    value: 'king',
    suit: 'diamonds',
    image: import("./images/card-images/diamonds/king.jpg"),
    flipped: false
  },
  //hearts
  {
    id: 27,
    value: 'a',
    suit: 'hearts',
    image: import("./images/card-images/hearts/a.jpg"),
    flipped: false
  },
  {
    id: 28,
    value: '2',
    suit: 'hearts',
    image: import("./images/card-images/hearts/2.jpg"),
    flipped: false
  },
  {
    id: 29,
    value: '3',
    suit: 'hearts',
    image: import("./images/card-images/hearts/3.jpg"),
    flipped: false
  },
  {
    id: 30,
    value: '4',
    suit: 'hearts',
    image: import("./images/card-images/hearts/4.jpg"),
    flipped: false
  },
  {
    id: 31,
    value: '5',
    suit: 'hearts',
    image: import("./images/card-images/hearts/5.jpg"),
    flipped: false
  },
  {
    id: 32,
    value: '6',
    suit: 'hearts',
    image: import("./images/card-images/hearts/6.jpg"),
    flipped: false
  },
  {
    id: 33,
    value: '7',
    suit: 'hearts',
    image: import("./images/card-images/hearts/7.jpg"),
    flipped: false
  },
  {
    id: 34,
    value: '8',
    suit: 'hearts',
    image: import("./images/card-images/hearts/8.jpg"),
  },
  {
    id: 35,
    value: '9',
    suit: 'hearts',
    image: import("./images/card-images/hearts/9.jpg"),
    flipped: false
  },
  {
    id: 36,
    value: '10',
    suit: 'hearts',
    image: import("./images/card-images/hearts/10.jpg"),
    flipped: false
  },
  {
    id: 37,
    value: 'jack',
    suit: 'hearts',
    image: import("./images/card-images/hearts/jack.jpg"),
    flipped: false
  },
  {
    id: 38,
    value: 'queen',
    suit: 'hearts',
    image: import("./images/card-images/hearts/queen.jpg"),
    flipped: false
  },
  {
    id: 39,
    value: 'king',
    suit: 'hearts',
    image: import("./images/card-images/hearts/king.jpg"),
    flipped: false
  },
  //spades
  {
    id: 38,
    value: 'a',
    suit: 'spades',
    image: import("./images/card-images/spades/a.jpg"),
    flipped: false
  },
  {
    id: 39,
    value: '2',
    suit: 'spades',
    image: import("./images/card-images/spades/2.jpg"),
    flipped: false
  },
  {
    id: 40,
    value: '3',
    suit: 'spades',
    image: import("./images/card-images/spades/3.jpg"),
    flipped: false
  },
  {
    id: 41,
    value: '4',
    suit: 'spades',
    image: import("./images/card-images/spades/4.jpg"),
    flipped: false
  },
  {
    id: 42,
    value: '5',
    suit: 'spades',
    image: import("./images/card-images/spades/5.jpg"),
    flipped: false
  },
  {
    id: 43,
    value: '6',
    suit: 'spades',
    image: import("./images/card-images/spades/6.jpg"),
    flipped: false
  },
  {
    id: 44,
    value: '7',
    suit: 'spades',
    image: import("./images/card-images/spades/7.jpg"),
    flipped: false
  },
  {
    id: 45,
    value: '8',
    suit: 'spades',
    image: import("./images/card-images/spades/8.jpg"),
  },
  {
    id: 46,
    value: '9',
    suit: 'spades',
    image: import("./images/card-images/spades/9.jpg"),
    flipped: false
  },
  {
    id: 47,
    value: '10',
    suit: 'spades',
    image: import("./images/card-images/spades/10.jpg"),
    flipped: false
  },
  {
    id: 48,
    value: 'jack',
    suit: 'spades',
    image: import("./images/card-images/spades/jack.jpg"),
    flipped: false
  },
  {
    id: 49,
    value: 'queen',
    suit: 'spades',
    image: import("./images/card-images/spades/queen.jpg"),
    flipped: false
  },
  {
    id: 50,
    value: 'king',
    suit: 'spades',
    image: import("./images/card-images/spades/king.jpg"),
    flipped: false
  }
]


export default cardData;