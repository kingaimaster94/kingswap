import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
	<title>New Project</title>
	<defs>
		<image  width="128" height="128" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAZSURBVHicY2AYBaNgFIyCUTAKRsEooC8AAAiAAAFVtmT4AAAAAElFTkSuQmCC"/>
		<image  width="128" height="113" id="img2" href="data:image/png;base64,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"/>
	</defs>
	<style>
	</style>
	<use id="Background" href="#img1" x="0" y="0"/>
	<use id="Background copy" href="#img2" x="0" y="13"/>
</svg>
    </Svg>
  );
};

export default Icon;