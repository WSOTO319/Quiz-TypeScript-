import styled from "styled-components";

export const Wrapper = styled.div`
  // Styled Wrapper for the QuestionCard component
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  //making a type of ButtonWrapperProps with the props, correct and userClicked
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  //Making a const variable for ButtonWrapper which will be a styled div with a type of ButtonWrapperProps
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  button {
    //regular styles and then
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${(
      { correct, userClicked } //background will check the booleans of correct and userClicked
    ) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)" //if correct then display this
        : !correct && userClicked // if incorrect AND clicked
        ? "linear-gradient(90deg, #ff5656, #c16868)" //display this
        : "linear-gradient(90deg, #56ccff, #6eafb4)"}; // else, other options display this
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
