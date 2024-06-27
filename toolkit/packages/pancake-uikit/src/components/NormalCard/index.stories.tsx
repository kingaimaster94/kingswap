import React from "react";
import styled, { useTheme } from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Box from "../Box/Box";
import Heading from "../Heading/Heading";
import NormalCardRibbon from "./NormalCardRibbon";
import UIKitNormalCardHeader from "./NormalCardHeader";
import NormalCardBody from "./NormalCardBody";
import NormalCardFooter from "./NormalCardFooter";
import NormalCard from "./NormalCard";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/NormalCard",
  component: NormalCard,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <NormalCard>
          <NormalCardBody>Body</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard isActive>
          <NormalCardBody>Active</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard isSuccess>
          <NormalCardBody>Success</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard isWarning>
          <NormalCardBody>Warning</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard isDisabled>
          <NormalCardBody>Disabled</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
    </div>
  );
};

export const NormalCardHeader: React.FC = () => {
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
        <NormalCard borderBackground={borderBackground}>
          <Box background={customHeadingColor} p="16px" height={headerHeight}>
            <Heading size="xl" color="white">
              Custom overlapping Header
            </Heading>
          </Box>
          <NormalCardBody>The border on sides of header is covered</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard borderBackground={gradientBorderColor}>
          <Box background={theme.colors.gradients.cardHeader} p="16px" height={headerHeight}>
            <Heading size="xl">Gradient overlapping Header</Heading>
          </Box>
          <NormalCardBody>The border on sides of header is covered</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard>
          <UIKitNormalCardHeader>
            <Heading size="xl">NormalCard Header</Heading>
          </UIKitNormalCardHeader>
          <NormalCardBody>Body</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard>
          <UIKitNormalCardHeader variant="blue">
            <Heading size="xl">NormalCard Header</Heading>
          </UIKitNormalCardHeader>
          <NormalCardBody>Body</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard>
          <UIKitNormalCardHeader variant="violet">
            <Heading size="xl">NormalCard Header</Heading>
          </UIKitNormalCardHeader>
          <NormalCardBody>Body</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard>
          <UIKitNormalCardHeader variant="bubblegum">
            <Heading size="xl">NormalCard Header</Heading>
          </UIKitNormalCardHeader>
          <NormalCardBody>Body</NormalCardBody>
          <NormalCardFooter>Footer</NormalCardFooter>
        </NormalCard>
      </Row>
    </div>
  );
};

export const CustomBackground: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <NormalCard background="#f0c243" borderBackground="#b88700">
        <NormalCardBody style={{ height: "150px" }}>Custom background</NormalCardBody>
      </NormalCard>
    </div>
  );
};

export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <NormalCard ribbon={<NormalCardRibbon text="Ribbon" />}>
          <div style={{ height: "112px", backgroundColor: "#191326" }} />
          <NormalCardBody style={{ height: "150px" }}>Body</NormalCardBody>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard ribbon={<NormalCardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
          <NormalCardBody style={{ height: "150px" }}>Ribbons will truncate when text is too long</NormalCardBody>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard ribbon={<NormalCardRibbon variantColor="success" text="Success" />}>
          <NormalCardBody style={{ height: "150px" }}>NormalCard</NormalCardBody>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard ribbon={<NormalCardRibbon variantColor="failure" text="Failure" />}>
          <NormalCardBody style={{ height: "150px" }}>Any Color in the theme</NormalCardBody>
        </NormalCard>
      </Row>
      <Row>
        <NormalCard ribbon={<NormalCardRibbon variantColor="failure" text="Failure" ribbonPosition="left" />}>
          <NormalCardBody style={{ height: "150px" }}>Any Color in the theme</NormalCardBody>
        </NormalCard>
      </Row>
    </div>
  );
};
