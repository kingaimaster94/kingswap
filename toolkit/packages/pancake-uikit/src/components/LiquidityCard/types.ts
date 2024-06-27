import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme/types";

export interface LiquidityCardRibbonProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  variantColor?: keyof Colors;
  text: string;
  ribbonPosition?: "right" | "left";
}

export type LiquidityCardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: {
    default: string;
    blue: string;
    bubblegum: string;
    violet: string;
  };
  dropShadow: string;
};

export interface LiquidityCardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  ribbon?: React.ReactNode;
  borderBackground?: string;
  background?: string;
}
