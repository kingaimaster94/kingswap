import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type SwapCardBodyProps = SpaceProps;

const SwapCardBody = styled.div<SwapCardBodyProps>`
  ${space}
`;

SwapCardBody.defaultProps = {
  p: "24px",
};

export default SwapCardBody;
