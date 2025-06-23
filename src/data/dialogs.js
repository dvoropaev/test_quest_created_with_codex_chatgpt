export const introDialog = {
  start: 0,
  nodes: [
    {
      text: 'Привет, путешественник! Чем могу помочь?',
      choices: [
        { text: 'Кто ты?', next: 1 },
        { text: 'Ничего, пока', next: 2 }
      ]
    },
    {
      text: 'Я хранитель портала и помогаю путникам.',
      choices: [ { text: 'Спасибо', next: 2 } ]
    },
    {
      text: 'До встречи!'
    }
  ]
};
