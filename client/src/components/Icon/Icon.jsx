import { StyledSpan, StyledIcon, StyledButton, Paragraph } from "./icon.styles";

const convertedNumbers = (x) => {
  if (x !== undefined) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

const Icon = (props) => {
  return (
    <StyledSpan>
      <StyledButton type={props.type}>
        <StyledIcon
          type={props.type}
          color={props.color}
          onClick={props.handleClick}
        >
          {props.icon}
        </StyledIcon>
      </StyledButton>
      <Paragraph>{convertedNumbers(props.stats)}</Paragraph>
    </StyledSpan>
  );
};

export default Icon;
