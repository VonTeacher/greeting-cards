const first = [
  'Champ',
  'Fact:',
  'Everybody says',
  'Dang...',
  'Check it:',
  'Just saying...',
  'Superstar,',
  'Tiger,',
  'Self,',
  'Know this:',
  'News alert:',
  'Girl,',
  'Ace,',
  'Excuse me but',
  'Experts agree:',
  'In my opinion,',
  'Hear ye, hear ye:',
  'Okay, listen up:'
]

const second = [
  'the mere idea of you',
  'your soul',
  'your hair today',
  'everything you do',
  'your personal style,',
  'every thought you have',
  'that sparkle in your eye',
  'your presence here',
  'what you got going on',
  'the essential you',
  'your life\'s journey',
  'that saucy personality',
  'your DNA',
  'that brain of yours',
  'your choice of attire',
  'the way you roll',
  'whatever your secret is',
  'all of y\'all',
]

const third = [
  'has serious game,',
  'rains magic,',
  'deserves the Nobel Prize,',
  'raises the roof,',
  'breeds miracles,',
  'is paying off big time,',
  'shows mads skills,',
  'just shimmers,',
  'is a national treasure,',
  'gets the party hopping,',
  'is the next big thing,',
  'roars like a lion,',
  'is a rainbow factory,',
  'is made of diamonds,',
  'makes birds sing,',
  'should be taught in school,',
  'makes my world go \'round,',
  'is 100% legit,',
]

const fourth = [
  '24/7.',
  'can I get an amen?',
  'and that\'s a fact.',
  'so treat yourself.',
  'you feel me?',
  'that\'s just science.',
  'would I lie?',
  'for reals.',
  '*mic drop*',
  'you hidden gem.',
  'snuggle bear.',
  'period.',
  'know what I\'m saying?',
  'now let\'s dance.',
  'high five.',
  'say it again!',
  'according to those who know.',
  'so get used to it.'
]

const randomElement = (array) => {
  return Math.floor(Math.random() * array.length);
}

const rewrite = document.getElementById('rewrite');
rewrite.addEventListener('click', () => {
  setTimeout(() => {
    writeCard();
  }, 500);
})

const writeCard = () => {
  const salutation = document.getElementById('salutation');
  const cardBody = document.getElementById('card-body');

  salutation.textContent = ""
  cardBody.textContent = ""

  const firstElement = first[randomElement(first)];
  const secondElement = second[randomElement(second)];
  const thirdElement = third[randomElement(third)];
  const fourthElement = fourth[randomElement(fourth)];


  salutation.append(firstElement);
  cardBody.append(secondElement, ' ', thirdElement, ' ', fourthElement);
}

writeCard();
