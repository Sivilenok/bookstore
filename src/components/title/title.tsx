import { ChoiceTitle, StyledTitle } from "./styles";

interface IProps {
    choice: ChoiceTitle;
    text: string;
  }
  
  export const Title = ({ choice, text }: IProps) => (
    <StyledTitle as={choice} $choice={choice}>
      {text}
    </StyledTitle>
  );