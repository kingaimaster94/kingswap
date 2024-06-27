import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { SwapCardTheme } from "./types";

export interface SwapCardHeaderProps extends SpaceProps {
  variant?: keyof SwapCardTheme["SwapCardHeaderBackground"];
}

const SwapCardHeader = styled.div<SwapCardHeaderProps>`
  background: #052148;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
  ${space}
`;

SwapCardHeader.defaultProps = {
  p: "24px",
};

export default SwapCardHeader;
