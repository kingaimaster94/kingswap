import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { NormalCardTheme } from "./types";

export interface NormalCardHeaderProps extends SpaceProps {
  variant?: keyof NormalCardTheme["cardHeaderBackground"];
}

const NormalCardHeader = styled.div<NormalCardHeaderProps>`
  background: #052148;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
  ${space}
`;

NormalCardHeader.defaultProps = {
  p: "24px",
};

export default NormalCardHeader;
