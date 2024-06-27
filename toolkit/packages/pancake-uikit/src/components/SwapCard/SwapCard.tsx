import React from "react";
import { StyledSwapCard, StyledSwapCardInner } from "./StyledSwapCard";
import { SwapCardProps } from "./types";

const SwapCard: React.FC<SwapCardProps> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledSwapCard {...props} style={{ position: 'relative'}}>
      <div style={{ position: "absolute", width: "3%", height: "277px", marginTop: "-138px", marginLeft: "48%", transform: "rotate(-90deg)", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "300px", zIndex: -1, bottom: "-152px", marginLeft: "48%", transform: "rotate(-90deg)", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      
      <div style={{ position: "absolute", width: "5%", height: "80%", zIndex: -1, marginTop: "-5%", marginLeft: "-2.9%", background: "radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "80%", zIndex: -1, marginTop: "21%", marginLeft: "97.7%", transform: "rotate(-180deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "1000px", zIndex: -2, marginTop: "-78%", marginLeft: "56%", transform: "rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "900px", zIndex: -2, marginTop: "-37%", marginLeft: "79%", transform: "rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "900px", zIndex: -2, marginTop: "-40%", marginLeft: "17%", transform: "rotate(-21.85deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <StyledSwapCardInner background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledSwapCardInner>
    </StyledSwapCard>
  );
};
export default SwapCard;
