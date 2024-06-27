import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { SwapCardRibbonProps } from "./types";

interface StyledSwapCardRibbonProps extends SwapCardRibbonProps {
  theme: DefaultTheme;
}

const StyledSwapCardRibbon = styled.div<Partial<StyledSwapCardRibbonProps>>`
  z-index: 10;
  background-color: ${({ variantColor = "secondary", theme }) => theme.colors[variantColor]};
  color: white;
  margin: 0;
  padding: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ ribbonPosition }) => (ribbonPosition === "right" ? 0 : "auto")};
  top: 0;
  text-align: center;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform: ${({ ribbonPosition }) =>
    ribbonPosition === "right"
      ? "translateX(30%) translateY(0%) rotate(45deg)"
      : "translateX(0%) translateY(200%) rotate(-45deg)"};
  transform-origin: top left;
  width: 96px;

  &:before,
  &:after {
    background-color: ${({ variantColor = "secondary", theme }) => theme.colors[variantColor]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`;

const SwapCardRibbon: React.FC<SwapCardRibbonProps> = ({ variantColor, text, ribbonPosition, ...props }) => {
  return (
    <StyledSwapCardRibbon variantColor={variantColor} ribbonPosition={ribbonPosition} {...props}>
      <div title={text}>{text}</div>
    </StyledSwapCardRibbon>
  );
};

SwapCardRibbon.defaultProps = {
  ribbonPosition: "right",
};

export default SwapCardRibbon;
