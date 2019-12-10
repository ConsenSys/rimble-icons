var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgPoe = function SvgPoe(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#DCD6CC",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M18.569 5.799a3.212 3.212 0 00-2.262-.924 3.2 3.2 0 00-2.262.924l-7.393 7.28a.375.375 0 00-.108.286v3.747L4.5 19.125h1.127l1.514-1.49h3.783a.383.383 0 00.283-.122l7.355-7.243.007-.008a3.123 3.123 0 00.931-2.219 3.128 3.128 0 00-.931-2.242v-.002zm-4.3.846l.313-.307a2.44 2.44 0 011.724-.702c.648 0 1.259.25 1.725.702.007.007.015.02.029.028.443.452.683 1.039.683 1.67 0 .637-.255 1.239-.712 1.698l-.32.315h-2.86l1.878-1.85a.386.386 0 00.014-.536c-.008-.008-.008-.015-.015-.022a.404.404 0 00-.56 0l-1.891 1.863v-2.86l-.007.001zm-6.357 10.23l1.542-1.519h2.86l-1.543 1.52H7.912zm4.488-4.427l1.827-1.799h2.859l-1.826 1.799H12.4zm2.234.616l-1.703 1.677h-2.858l1.702-1.677h2.859zM11.819 9.06l1.833-1.806v2.852l-1.833 1.813V9.059zm-2.328 2.292l1.703-1.676v2.851L9.49 14.204V11.35zm-2.182 2.15l1.564-1.533v2.851l-1.564 1.533v-2.851z",
      fill: "white"
    })
  );
};

SvgPoe.displayName = "SvgPoe";
SvgPoe.defaultProps = {
  size: 24
};
export default SvgPoe;