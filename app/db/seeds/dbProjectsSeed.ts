export interface IProject {
  slug: string;
  imgPath: string;
  hrefDeployed: string;
  hrefRepo: string;
  title: string;
  descriptionShort: string;
  descriptionExtended: string;
}

const dbProjectsSeed: IProject[] = [
  {
    slug: "lebowski_trivia",
    imgPath: "/projectImages/Lebowski_Trivia.PNG",
    hrefDeployed: "https://nickprather11.github.io/Lebowski_Trivia/",
    hrefRepo: "https://github.com/NickPrather11/Lebowski_Trivia",
    title: "Lebowski Trivia",
    descriptionShort: "Trivia game based on the movie 'The Big Lebowski'",
    descriptionExtended:
      "This is a trivia game about the film 'The Big Lebowski'. You have 120 seconds to answer all 15 questions. When you are finished answering, click the 'submit' button. If you run out of time, any unanswered questions will be counted as incorrect. When you are finished, you will be directed to a page displaying your score as 'x/15'. Any questions answered incorrectly will be shown with your answer (marked as incorrect) and the correct answer. Click the 'Try Again' button to take the quiz again!",
  },
  {
    slug: "gluttony_game",
    imgPath: "/projectImages/Gluttony_Game.PNG",
    hrefDeployed: "https://nickprather11.github.io/gluttony_game/",
    hrefRepo: "https://github.com/NickPrather11/gluttony_game",
    title: "Gluttony! Game",
    descriptionShort: "Memory game with a hedonistic theme. Indulge yourself!",
    descriptionExtended:
      "You will be given a random number at the start of the game. This represents your ideal, transcendental buzz acquired from gobbling down all the items.There are five items displayed that will help you reach your goal, each item worth a random number value. By clicking on the items, your score will increase by this random value. You must reach your goal number to win; going above this number causes you to get sick and lose. Each time the game starts, your goal number and the random values change!",
  },
];

export default dbProjectsSeed;
