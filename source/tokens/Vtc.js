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

const SvgVtc = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#048657"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M1.974 12.428l1.463-1.666H8.64l3.197 4.078 8.366-11.59c.514.464.981.976 1.396 1.53.43.573.804 1.185 1.122 1.835L12.449 20.822c-.194.204-.398.306-.612.306-.214 0-.43-.102-.646-.306l-6.496-8.395H1.974z"
      fill="white"
    />
  </Svg>
);

SvgVtc.displayName = "SvgVtc";
SvgVtc.defaultProps = {
  size: 24
};
export default SvgVtc;
