import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type NormalCardFooterProps = SpaceProps;

const NormalCardFooter = styled.div<NormalCardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

NormalCardFooter.defaultProps = {
  p: "24px",
};

export default NormalCardFooter;
