import React from "react";
import { AnswerObject } from "../App";

type Props = {
  //giving each property a type
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (
  {
    //using "Props" and assigning the properties from that to QuestionCard
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
  } //QuestionCard will return the following HTML
) => (
  <div>
    <p className="number">
      {/*paragraph to display which question out of the total questions we are currently in  */}
      Question: {questionNr} / {totalQuestions}
    </p>
    {/**dangerouslySetInnerHTML allows you to directly pass HTML into an element within JSX. So here question will be printed as a <p> tag */}
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map(
        (
          answer //map answers to answer variable and return a div where button that was clicked by user is disabled and
        ) => (
          //onClick will call callback. Span tag is used to mark up a part of a text. Once again uses dangerously to insert HTML
          <div key={answer}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        )
      )}
    </div>
  </div>
);
export default QuestionCard;
