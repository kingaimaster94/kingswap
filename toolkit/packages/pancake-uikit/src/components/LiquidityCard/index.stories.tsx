import React from "react";
import styled, { useTheme } from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Box from "../Box/Box";
import Heading from "../Heading/Heading";
import LiquidityCardRibbon from "./LiquidityCardRibbon";
import UIKitLiquidityCardHeader from "./LiquidityCardHeader";
import LiquidityCardBody from "./LiquidityCardBody";
import LiquidityCardFooter from "./LiquidityCardFooter";
import LiquidityCard from "./LiquidityCard";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/LiquidityCard",
  component: LiquidityCard,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <LiquidityCard>
          <LiquidityCardBody>Body</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard isActive>
          <LiquidityCardBody>Active</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard isSuccess>
          <LiquidityCardBody>Success</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard isWarning>
          <LiquidityCardBody>Warning</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard isDisabled>
          <LiquidityCardBody>Disabled</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
    </div>
  );
};

export const LiquidityCardHeader: React.FC = () => {
  const theme = useTheme();
  // This is example how to make card header "overlap" the border.
  // Seems to be easiest solution that works on all screens and does not rely on absolute positioning trickery
  const headerHeight = "60px";
  const customHeadingColor = "#7645D9";
  const gradientStopPoint = `calc(${headerHeight} + 1px)`;
  const borderBackground = `linear-gradient(${customHeadingColor} ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint})`;

  // Gradient overlap is also possible, just put the "dividing" gradient first and after that the header gradient
  const gradientBorderColor = `linear-gradient(transparent ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint}), ${theme.colors.gradients.cardHeader}`;
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <LiquidityCard borderBackground={borderBackground}>
          <Box background={customHeadingColor} p="16px" height={headerHeight}>
            <Heading size="xl" color="white">
              Custom overlapping Header
            </Heading>
          </Box>
          <LiquidityCardBody>The border on sides of header is covered</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard borderBackground={gradientBorderColor}>
          <Box background={theme.colors.gradients.cardHeader} p="16px" height={headerHeight}>
            <Heading size="xl">Gradient overlapping Header</Heading>
          </Box>
          <LiquidityCardBody>The border on sides of header is covered</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard>
          <UIKitLiquidityCardHeader>
            <Heading size="xl">LiquidityCard Header</Heading>
          </UIKitLiquidityCardHeader>
          <LiquidityCardBody>Body</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard>
          <UIKitLiquidityCardHeader variant="blue">
            <Heading size="xl">LiquidityCard Header</Heading>
          </UIKitLiquidityCardHeader>
          <LiquidityCardBody>Body</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard>
          <UIKitLiquidityCardHeader variant="violet">
            <Heading size="xl">LiquidityCard Header</Heading>
          </UIKitLiquidityCardHeader>
          <LiquidityCardBody>Body</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard>
          <UIKitLiquidityCardHeader variant="bubblegum">
            <Heading size="xl">LiquidityCard Header</Heading>
          </UIKitLiquidityCardHeader>
          <LiquidityCardBody>Body</LiquidityCardBody>
          <LiquidityCardFooter>Footer</LiquidityCardFooter>
        </LiquidityCard>
      </Row>
    </div>
  );
};

export const CustomBackground: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <LiquidityCard background="#f0c243" borderBackground="#b88700">
        <LiquidityCardBody style={{ height: "150px" }}>Custom background</LiquidityCardBody>
      </LiquidityCard>
    </div>
  );
};

export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <LiquidityCard ribbon={<LiquidityCardRibbon text="Ribbon" />}>
          <div style={{ height: "112px", backgroundColor: "#191326" }} />
          <LiquidityCardBody style={{ height: "150px" }}>Body</LiquidityCardBody>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard ribbon={<LiquidityCardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
          <LiquidityCardBody style={{ height: "150px" }}>Ribbons will truncate when text is too long</LiquidityCardBody>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard ribbon={<LiquidityCardRibbon variantColor="success" text="Success" />}>
          <LiquidityCardBody style={{ height: "150px" }}>LiquidityCard</LiquidityCardBody>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard ribbon={<LiquidityCardRibbon variantColor="failure" text="Failure" />}>
          <LiquidityCardBody style={{ height: "150px" }}>Any Color in the theme</LiquidityCardBody>
        </LiquidityCard>
      </Row>
      <Row>
        <LiquidityCard ribbon={<LiquidityCardRibbon variantColor="failure" text="Failure" ribbonPosition="left" />}>
          <LiquidityCardBody style={{ height: "150px" }}>Any Color in the theme</LiquidityCardBody>
        </LiquidityCard>
      </Row>
    </div>
  );
};
