var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgSls = function SvgSls(props) {
  return React.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#8E9495",
      height: props.size,
      width: props.size
    }, props),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M5.717 15.533a5.18 5.18 0 01-.38-1.16 4.047 4.047 0 01-.087-.64h.67a4.646 4.646 0 00.408 1.535c.402.852 1.012 1.338 1.899 1.338.693 0 1.23-.277 1.608-.766a2.44 2.44 0 00.502-1.422c0-.59-.223-1.025-.67-1.393-.362-.3-.78-.51-1.643-.869l-.152-.063c-.897-.371-1.311-.575-1.714-.893-.556-.44-.852-.985-.852-1.683 0-.837.301-1.545.84-2.046a2.747 2.747 0 011.87-.721c.96 0 1.694.4 2.181 1.1v-.952h2.166v9.56h.644v-2.683a.66.66 0 010-.066l.67.023v.034a4.47 4.47 0 00.395 1.502c.4.851 1.011 1.338 1.897 1.338.693 0 1.23-.278 1.608-.767.321-.413.502-.961.502-1.422 0-.59-.223-1.025-.67-1.393-.362-.3-.78-.51-1.642-.869l-.153-.063c-.897-.371-1.31-.575-1.714-.893-.556-.44-.851-.985-.851-1.683 0-.836.3-1.545.839-2.046a2.747 2.747 0 011.871-.72c.96 0 1.693.4 2.18 1.1v-.912h.671v3.317h-.67c0-.693-.16-1.395-.473-1.914-.368-.612-.923-.947-1.708-.947a2.063 2.063 0 00-1.405.539c-.405.378-.635.918-.635 1.583 0 .495.2.863.607 1.185.338.266.716.452 1.554.8l.152.063c.925.383 1.383.614 1.815.97.59.488.903 1.099.903 1.883 0 .597-.227 1.28-.634 1.808-.502.647-1.235 1.025-2.147 1.025-.632 0-1.175-.192-1.62-.547a2.975 2.975 0 01-.672-.77v1.17h-1.984V7.541h-.825v2.713h-.671c0-.693-.159-1.395-.472-1.914-.369-.612-.924-.947-1.708-.947a2.063 2.063 0 00-1.405.539c-.405.378-.635.918-.635 1.583 0 .495.2.863.607 1.185.338.266.716.452 1.553.8l.153.063c.925.383 1.383.614 1.815.97.59.488.903 1.099.903 1.883 0 .597-.227 1.28-.635 1.808-.502.647-1.234 1.025-2.146 1.025-.633 0-1.175-.192-1.62-.547a2.996 2.996 0 01-.687-.79v1.149h-.67v-3.33h.67v2.18a3.97 3.97 0 01-.203-.379z",
      fill: "#fff"
    })
  );
};

export default SvgSls;