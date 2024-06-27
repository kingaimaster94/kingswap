import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type LiquidityCardFooterProps = SpaceProps;

const LiquidityCardFooter = styled.div<LiquidityCardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

LiquidityCardFooter.defaultProps = {
  p: "24px",
};

export default LiquidityCardFooter;
