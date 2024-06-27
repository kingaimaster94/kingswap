import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 0px;
    height: 0px;
    border-top-right-radius: 50px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: rgba(0, 148, 255, 1);
    z-index: -1;
  }
`;

export const StyledTooltip = styled.div`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: radial-gradient(43.91% 300.21% at 56.09% -78.09%, #1E61B7 26.56%, #042148 98.96%);
  color: #72c2ed;
  border: 1px solid rgba(0, 148, 255, 1);

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
