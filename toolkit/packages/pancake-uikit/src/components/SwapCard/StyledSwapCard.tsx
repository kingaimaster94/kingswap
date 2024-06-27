import styled, { DefaultTheme, keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { SwapCardProps } from "./types";

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

interface StyledSwapCardProps extends SwapCardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBorderColor = ({ isActive, isSuccess, isWarning, borderBackground, theme }: StyledSwapCardProps) => {
  if (borderBackground) {
    return borderBackground;
  }
  if (isWarning) {
    return theme.colors.warning;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`;
  }

  return theme.colors.cardBorder;
};

export const StyledSwapCard = styled.div<StyledSwapCardProps>`
  background: ${getBorderColor};
  border-radius: 12px !important;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "menuText"]};
  position: relative;
  background-image: linear-gradient(78.19deg, #33C6DE 9.16%, #4016ED 91.66%);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 15px;
    z-index: -1;
    pointer-events: none;
    width: 60%;
    border-radius: 50%;
    opacity: .45;
    mix-blend-mode: hard-light;
  }

  &:before {
    left: 15px;
    background-color: #e300ff;
    box-shadow: 0 0 160px 150px #153c8da1;
  }
  &:after {
    right: 15px;
    background-color: #e300ff;
    box-shadow: 0 0 160px 150px #153c8da1;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${PromotedGradient} 3s ease infinite;
      background-size: 400% 400%;
    `}

  padding: 1px 1px 3px 1px;
  
  ${space}
`;

export const StyledSwapCardInner = styled(Box)<{ background?: string; hasCustomBorder: boolean }>`
  width: 100%;
  height: 100%;
  overflow: ${({ hasCustomBorder }) => (hasCustomBorder ? "initial" : "inherit")};
  background: #02132F;
  background-image: radial-gradient(80% 80% at 50% 50%, #084A9E 0%, #0A3C79 31.25%, rgba(10, 59, 121, 0) 100%);
  border-radius: ${({ theme }) => theme.radii.card};
`;

StyledSwapCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};
