import { StyledButton } from "./styles";

interface Props {
    title: string ;
    width?: string;
    padding: string;
    margin: string;
    borderRadius: string;
    disabled?: boolean;
}

export const Button = ({title, width, padding, margin, borderRadius, disabled}: Props) => (
    <StyledButton width={width} margin={margin} padding={padding} borderRadius={borderRadius} disabled={disabled}>
        {title}
    </StyledButton>
)