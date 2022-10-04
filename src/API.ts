import { shuffleArray } from "./utils";

export type Question = {
  //making a 'Question' type with parameters and exporting it
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestiongState = Question & { answers: string[] }; // making a "QuestionState" type with Question as well as the paramater of the answers which is an
// array of strings and exporting it

export enum Difficulty { // making a string enum where each difficulty is equivalent to string version of self. Will be used in below function .Enums allow a
  //developer to define a set of named constants
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  // async function that has two parameters,  amount which is a number and difficulty which is one of the options in the Difficulty enum.
  amount: number, //parameters will be used in endpoint constant which is the api url
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json(); //const data will await a fetch for the endpoint then await the conversion to json
  return data.results.map((question: Question) => ({
    //map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results
    //return and map the results from data. We say each of these results are a question and we specify it as a Question of our type in the parenthesis
    ...question, //... is a spread operator. The spread operator is used to expand or spread an iterable or an array.
    // Here it takes the question object and spreads it(so we can use all the properties in it) and adds property "answers"
    //(which will be a combo of the correct answer and incorrect answers) this will then equal the answers shuffled so the correct
    //answer wont always be in the same spot
    answers: shuffleArray([
      // shuffleArray used to randomize where the right answer is
      ...question.incorrect_answers, //spread here to access each incorrect answer in array of incorrect answers
      question.correct_answer,
    ]),
  }));
};
// Making a type of Question with it's props and a type of QuestionState that extends the Question by adding a parameter of answers.
// Making an enum for the difficulties.
// Making a constant variable that uses an asynchronous function which takes two parameters and gets the questions from the api
// link and maps them to variable question. We specify that the type of question is Question type.
// With this we spread the question results and for each question we add a property called answers.
// The answers will just be an array where we shuffle the spreaded incorrect answers and correct answer
