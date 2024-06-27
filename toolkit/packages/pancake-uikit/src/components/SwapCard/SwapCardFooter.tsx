import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type SwapCardFooterProps = SpaceProps;

const SwapCardFooter = styled.div<SwapCardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

SwapCardFooter.defaultProps = {
  p: "24px",
};

export default SwapCardFooter;
