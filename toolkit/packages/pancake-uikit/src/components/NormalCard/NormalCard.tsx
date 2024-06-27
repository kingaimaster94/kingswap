import React from "react";
import { StyledNormalCard, StyledNormalCardInner } from "./StyledNormalCard";
import { NormalCardProps } from "./types";

const NormalCard: React.FC<NormalCardProps> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledNormalCard {...props} style={{ position: 'relative'}}>
      {/* <div style={{ position: "absolute", width: "5%", height: "1000px", zIndex: -2, marginTop: "-78%", marginLeft: "56%", transform: "rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "900px", zIndex: -2, marginTop: "-37%", marginLeft: "79%", transform: "rotate(-62.89deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "5%", height: "900px", zIndex: -2, marginTop: "-40%", marginLeft: "17%", transform: "rotate(-21.85deg)", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} /> */}
      <StyledNormalCardInner background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledNormalCardInner>
    </StyledNormalCard>
  );
};
export default NormalCard;
