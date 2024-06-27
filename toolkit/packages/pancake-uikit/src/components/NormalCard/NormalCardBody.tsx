import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type NormalCardBodyProps = SpaceProps;

const NormalCardBody = styled.div<NormalCardBodyProps>`
  ${space}
`;

NormalCardBody.defaultProps = {
  p: "24px",
};

export default NormalCardBody;
