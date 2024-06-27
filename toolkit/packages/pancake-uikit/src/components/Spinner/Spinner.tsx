import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import NegativeIcon from "./NegativeIcon";
import { SpinnerProps } from "./types";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
  25% {
		transform: rotate(90deg);
	}
	50% {
		transform: rotate(180deg);
	}
  75% {
		transform: rotate(270deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const rotateNegative = keyframes`
	0% {
		transform: rotate(360deg);
	}
  25% {
		transform: rotate(270deg);
	}
	50% {
		transform: rotate(180deg);
	}
  75% {
		transform: rotate(90deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const RotatingNegativePancakeIcon = styled(NegativeIcon)`
  position: absolute;
  top: 29;
  left: 0;
  animation: ${rotateNegative} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 154 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 1.2}px`} />
      <RotatingNegativePancakeIcon width={`${size * 1.2}px`} />
      {/* <FloatingPanIcon width={`${size}px`} /> */}
    </Container>
  );
};

export default Spinner;
