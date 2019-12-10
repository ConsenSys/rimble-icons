import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgZen = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#234871"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M14 12.973l-1.01-.603V9.65l-2.37-1.384V7.013L14 8.976v3.996zm-1.377-2.75v1.15l-2.412 1.416v2.805l-.975.583v-3.965l3.386-1.99zM10.9 12.835l1.083-.626 2.316 1.38 2.332-1.38 1.05.628-3.393 1.998-3.388-2zm3.388 2.351l3.69-2.172v4.33L14.288 19.5l-3.69-2.168V13.01l3.69 2.178zm-5.353-3.15v4.32L5.25 14.21V9.872l3.674-2.164 3.7 2.163-3.689 2.166zm9.042-5.391v4.345L14.3 13.154V8.802l-3.679-2.14L14.305 4.5l3.672 2.146z"
      fill="white"
    />
  </Svg>
);

SvgZen.displayName = "SvgZen";
SvgZen.defaultProps = {
  size: 24
};
export default SvgZen;
