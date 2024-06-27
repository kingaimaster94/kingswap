import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type LiquidityCardBodyProps = SpaceProps;

const LiquidityCardBody = styled.div<LiquidityCardBodyProps>`
  ${space}
`;

LiquidityCardBody.defaultProps = {
  p: "24px",
};

export default LiquidityCardBody;
