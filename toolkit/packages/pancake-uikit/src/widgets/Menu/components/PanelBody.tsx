import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
background: radial-gradient(100% 52% at 6% 35%,#094490a0 0%,#000A1Aa0 91.25%,rgba(10,59,121,0) 100%);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                      {item.status && (
                        <LinkStatus color={item.status.color} fontSize="14px">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="14px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
      <div style={{ position: "absolute", width: "13px", height: "400px", zIndex: -2, marginTop: "315px", marginLeft: "-3px", transform: "rotate(300deg)",  background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "13px", height: "400px", zIndex: -2, marginTop: "320px", marginLeft: "22px", transform: "rotate(300deg)", opacity:"0.5" , background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
      <div style={{ position: "absolute", width: "13px", height: "400px", zIndex: -2, marginTop: "317px", marginLeft: "-40px", transform: "rotate(300deg)", opacity: "0.3", background: "radial-gradient(33.74% 42.58% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.62%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)" }} />
    </Container>
  );
};

export default PanelBody;
