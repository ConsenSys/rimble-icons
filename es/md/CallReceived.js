function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgCallReceived = function SvgCallReceived(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("path", {
    d: "M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"
  }));
};

SvgCallReceived.displayName = "SvgCallReceived";
SvgCallReceived.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgCallReceived;