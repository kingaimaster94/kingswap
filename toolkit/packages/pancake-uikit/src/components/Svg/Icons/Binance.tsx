import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
	<title>New Project</title>
	<defs>
		<image  width="24" height="24" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAMSURBVHicY2CgLQAAAGAAAeazCCcAAAAASUVORK5CYII="/>
		<image  width="24" height="24" id="img2" href="data:image/png;base64,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"/>
	</defs>
	<style>
	</style>
	<use id="Background" href="#img1" x="0" y="0"/>
	<use id="Layer 1" href="#img2" x="0" y="0"/>
</svg>
  );
};

export default Icon;
