var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgIost = function SvgIost(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#1C1C1C"
    }),
    React.createElement("path", {
      d: "M18.375 8.25v7.5L12 19.5l-6.375-3.75v-7.5L12 4.5l6.375 3.75zm-6.576 4.055l-.592.35 1.106.647.59-.347 1.573.926-2.348 1.38-4.871-2.84-.02 1.383 4.894 2.842 4.703-2.765-2.756-1.622.555-.327-1.107-.647-.551.326-.772-.455.675-.4-1.107-.647-.673.398-1.315-.774 2.348-1.381 3.245 1.897 1.19-.704-4.438-2.578-4.702 2.766 2.496 1.469-.47.277 1.107.648.467-.276.773.454z",
      fill: "#fff"
    })
  );
};

export default SvgIost;