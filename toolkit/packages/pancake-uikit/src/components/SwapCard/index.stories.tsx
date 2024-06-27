import React from "react";
import styled, { useTheme } from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Box from "../Box/Box";
import Heading from "../Heading/Heading";
import SwapCardRibbon from "./SwapCardRibbon";
import UIKitSwapCardHeader from "./SwapCardHeader";
import SwapCardBody from "./SwapCardBody";
import SwapCardFooter from "./SwapCardFooter";
import SwapCard from "./SwapCard";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/SwapCard",
  component: SwapCard,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <SwapCard>
          <SwapCardBody>Body</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard isActive>
          <SwapCardBody>Active</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard isSuccess>
          <SwapCardBody>Success</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard isWarning>
          <SwapCardBody>Warning</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard isDisabled>
          <SwapCardBody>Disabled</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
    </div>
  );
};

export const SwapCardHeader: React.FC = () => {
  const theme = useTheme();
  // This is example how to make SwapCard header "overlap" the border.
  // Seems to be easiest solution that works on all screens and does not rely on absolute positioning trickery
  const headerHeight = "60px";
  const customHeadingColor = "#7645D9";
  const gradientStopPoint = `calc(${headerHeight} + 1px)`;
  const borderBackground = `linear-gradient(${customHeadingColor} ${gradientStopPoint}, ${theme.colors.SwapCardBorder} ${gradientStopPoint})`;

  // Gradient overlap is also possible, just put the "dividing" gradient first and after that the header gradient
  const gradientBorderColor = `linear-gradient(transparent ${gradientStopPoint}, ${theme.colors.SwapCardBorder} ${gradientStopPoint}), ${theme.colors.gradients.SwapCardHeader}`;
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <SwapCard borderBackground={borderBackground}>
          <Box background={customHeadingColor} p="16px" height={headerHeight}>
            <Heading size="xl" color="white">
              Custom overlapping Header
            </Heading>
          </Box>
          <SwapCardBody>The border on sides of header is covered</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard borderBackground={gradientBorderColor}>
          <Box background={theme.colors.gradients.SwapCardHeader} p="16px" height={headerHeight}>
            <Heading size="xl">Gradient overlapping Header</Heading>
          </Box>
          <SwapCardBody>The border on sides of header is covered</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard>
          <UIKitSwapCardHeader>
            <Heading size="xl">SwapCard Header</Heading>
          </UIKitSwapCardHeader>
          <SwapCardBody>Body</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard>
          <UIKitSwapCardHeader variant="blue">
            <Heading size="xl">SwapCard Header</Heading>
          </UIKitSwapCardHeader>
          <SwapCardBody>Body</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard>
          <UIKitSwapCardHeader variant="violet">
            <Heading size="xl">SwapCard Header</Heading>
          </UIKitSwapCardHeader>
          <SwapCardBody>Body</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard>
          <UIKitSwapCardHeader variant="bubblegum">
            <Heading size="xl">SwapCard Header</Heading>
          </UIKitSwapCardHeader>
          <SwapCardBody>Body</SwapCardBody>
          <SwapCardFooter>Footer</SwapCardFooter>
        </SwapCard>
      </Row>
    </div>
  );
};

export const CustomBackground: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <SwapCard background="#f0c243" borderBackground="#b88700">
        <SwapCardBody style={{ height: "150px" }}>Custom background</SwapCardBody>
      </SwapCard>
    </div>
  );
};

export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <SwapCard ribbon={<SwapCardRibbon text="Ribbon" />}>
          <div style={{ height: "112px", backgroundColor: "#191326" }} />
          <SwapCardBody style={{ height: "150px" }}>Body</SwapCardBody>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard ribbon={<SwapCardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
          <SwapCardBody style={{ height: "150px" }}>Ribbons will truncate when text is too long</SwapCardBody>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard ribbon={<SwapCardRibbon variantColor="success" text="Success" />}>
          <SwapCardBody style={{ height: "150px" }}>SwapCard</SwapCardBody>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard ribbon={<SwapCardRibbon variantColor="failure" text="Failure" />}>
          <SwapCardBody style={{ height: "150px" }}>Any Color in the theme</SwapCardBody>
        </SwapCard>
      </Row>
      <Row>
        <SwapCard ribbon={<SwapCardRibbon variantColor="failure" text="Failure" ribbonPosition="left" />}>
          <SwapCardBody style={{ height: "150px" }}>Any Color in the theme</SwapCardBody>
        </SwapCard>
      </Row>
    </div>
  );
};
