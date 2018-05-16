const state = {
  screen: 'home',
  practice: '',
  squares: [
    {
      square: 'All',
      clicked: true
    }, {
      square: '1',
      clicked: false
    }, {
      square: '2',
      clicked: false
    }, {
      square: '3',
      clicked: false
    }, {
      square: '4',
      clicked: false
    }, {
      square: '5',
      clicked: false
    }, {
      square: '6',
      clicked: false
    }, {
      square: '7',
      clicked: false
    }, {
      square: '8',
      clicked: false
    }, {
      square: '9',
      clicked: false
    }, {
      square: '10',
      clicked: false
    }, {
      square: '11',
      clicked: false
    }, {
      square: '12',
      clicked: false
    }, {
      square: "Enter",
      clicked: "false"
    }
  ],
  options: [
    "1",
    "2",
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ],
  mathFacts: [
    {
      combo: [
        1, 1
      ],
      addLevel: 12,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 2
      ],
      addLevel: 7,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 3
      ],
      addLevel: 11,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 5
      ],
      addLevel: 5,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 6
      ],
      addLevel: 7,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        1, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        2, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        2, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        3, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        3, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        3, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        4, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        4, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        4, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        4, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        5, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        5, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        5, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },{
      combo: [
        5, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        5, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        6, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        7, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        8, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        9, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        10, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        11, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 1
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 2
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 3
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 4
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 5
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 6
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 7
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 8
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 9
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 10
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 11
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    }, {
      combo: [
        12, 12
      ],
      addLevel: 0,
      subLevel: 0,
      multLevel: 0,
      divLevel: 0
    },
  ],
  quiz: {
    question: '',
    correctAnswer: null,
    userAnswer: '',
    correct: null
  },
  selectedFacts: {
    mastered: [],
    level2: [],
    level1: []
  },
  isBtnDisabled: false,
  stats: {
    statsScreen: '',
    category: '',
    level: ''
  }
};

export default state;
