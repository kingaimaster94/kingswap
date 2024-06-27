import React from "react";
import { StyledLiquidityCard, StyledLiquidityCardInner } from "./StyledLiquidityCard";
import { LiquidityCardProps } from "./types";

const LiquidityCard: React.FC<LiquidityCardProps> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledLiquidityCard {...props} style={{ position: 'relative' }}>
      <div style={{ position: "absolute", width: "3%", height: "272px", top:"-133px", marginLeft:"48%", transform:"rotate(-90deg)", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "272px", bottom:"-137px", marginLeft:"48%", zIndex:-1, transform:"rotate(-90deg)", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "80%", zIndex:-1 , marginLeft:"-3%", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "80%", zIndex:-1 , marginTop:"11%", marginLeft:"98%", transform:"rotate(-180deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "800px", zIndex:-2, marginTop:"-78%", marginLeft:"56%", transform:"rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "700px", zIndex:-2, marginTop:"-37%", marginLeft:"90%", transform:"rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "800px", zIndex:-2, marginTop:"-40%", marginLeft:"17%", transform:"rotate(-21.85deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <StyledLiquidityCardInner background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledLiquidityCardInner>
    </StyledLiquidityCard>
  );
};
export default LiquidityCard;
