var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgEtp = function SvgEtp(props) {
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
      fill: "#00A5FF"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.56 9.43c-.002.67-.007 1.34-.008 2.008 0 1.113-.002 2.227.004 3.34 0 .135-.038.215-.156.287-.457.275-.907.562-1.39.864v-.244c0-1.722-.002-3.446.003-5.168 0-.144-.038-.225-.167-.294-.401-.218-.793-.452-1.19-.678-.043-.025-.09-.045-.156-.078v.236c0 1.544-.003 3.088.005 4.632 0 .155-.05.236-.18.309-.394.217-.779.45-1.168.676-.055.032-.113.06-.2.105v-.24c0-1.55-.004-3.102.005-4.652.001-.18-.06-.27-.21-.352-.438-.245-.867-.504-1.323-.77.504-.291.989-.573 1.479-.844.045-.024.138.008.195.04.426.24.852.482 1.273.732.101.06.176.068.282.002.389-.237.79-.456 1.178-.697.14-.087.24-.073.373.007.447.267.902.525 1.356.785l-.005-.005zm.005.006c.033-.035.061-.079.1-.102.423-.246.845-.494 1.275-.726a.323.323 0 01.263.002c.437.235.867.48 1.293.734.058.035.117.126.117.192.006 1.622.006 3.245.003 4.867 0 .053-.014.135-.05.156-.485.29-.976.57-1.498.872v-.246c0-1.564-.001-3.127.003-4.689 0-.133-.031-.213-.156-.281-.456-.253-.904-.522-1.355-.784l.005.005zm-8.36 4.655a1.067 1.067 0 11-.015-2.134 1.063 1.063 0 011.078 1.06 1.062 1.062 0 01-1.064 1.074zm1.435 3.215a1.012 1.012 0 01-1.02-.997 1.02 1.02 0 011-1.023c.543-.012 1.013.45 1.02 1.002a1.01 1.01 0 01-1 1.018zM5.825 8.55c.54.002.974.435.974.972a.977.977 0 01-1.674.686.964.964 0 01-.273-.692.956.956 0 01.973-.966zm13.142 3.68a.911.911 0 110-1.823.911.911 0 010 1.823zM7.157 6.463a.818.818 0 01.828-.83.826.826 0 01.827.837.826.826 0 01-.833.829.82.82 0 01-.823-.836zm11.32 9.22a.815.815 0 01-.832-.825.83.83 0 011.14-.78.832.832 0 01.514.768.816.816 0 01-.822.836zM11.989 5.14a.612.612 0 01-.639.612.618.618 0 01-.605-.647.626.626 0 011.073-.414.62.62 0 01.171.45zm4.329 13.127a.61.61 0 01-.614-.62.62.62 0 01.637-.62.615.615 0 01.613.623c0 .354-.276.62-.636.617zm-3.21 1.232a.573.573 0 01-.588-.591.586.586 0 01.597-.589.6.6 0 01.593.597.584.584 0 01-.602.583zm1.97-13.292a.532.532 0 01.007-1.065.544.544 0 01.531.535.544.544 0 01-.537.53zm-4.903 12.211a.457.457 0 01-.472.458.456.456 0 01-.454-.475.465.465 0 01.65-.42.463.463 0 01.276.437zm7.997-10.484a.397.397 0 01-.675.303.404.404 0 01.266-.694.394.394 0 01.41.392v-.001z",
      fill: "#fff"
    })
  );
};

export default SvgEtp;