var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgTabletAndroid = function SvgTabletAndroid(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "tabletAndroid_svg__a", d: "M0 0h24v24H0z" })
    ),
    React.createElement(
      "clipPath",
      { id: "tabletAndroid_svg__b" },
      React.createElement("use", { xlinkHref: "#tabletAndroid_svg__a", overflow: "visible" })
    ),
    React.createElement("path", {
      clipPath: "url(#tabletAndroid_svg__b)",
      d: "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"
    })
  );
};

export default SvgTabletAndroid;