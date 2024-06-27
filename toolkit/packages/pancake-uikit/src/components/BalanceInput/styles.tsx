import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import Text from "../Text/Text";
import IconButton from "../Button/IconButton";
import { BalanceInputProps } from "./types";

export const SwitchUnitsButton = styled(IconButton)`
  width: 16px;
`;

export const UnitContainer = styled(Text)`
  margin-left: 4px;
  text-align: right;
  color: #2FA2D3;
  white-space: nowrap;
`;

export const StyledBalanceInput = styled(Box)<{ isWarning: BalanceInputProps["isWarning"] }>`
  background: radial-gradient(43.91% 300.21% at 56.09% -78.09%, rgba(38, 108, 192, 0.5) 21.87%, rgba(26, 76, 156, 0.5) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;;
  opacity: 0.8;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
  box-shadow: ${({ theme, isWarning }) => theme.shadows[isWarning ? "warning" : "inset"]};
  padding: 8px 16px;
`;

export const StyledInput = styled(Input)`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: right;
  border: none;
  color: #BEE8FF;

  ::placeholder {
    color: #2FA2D3;
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;
