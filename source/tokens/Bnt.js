import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);
const SvgBnt = React.forwardRef((props, ref) => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
    ref={ref}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M11.94 4.41L8.552 6.395l3.388 1.986 3.452-1.986L11.94 4.41zm.557 10.6v3.972l4.603-2.626v-3.972l-4.603 2.627zm3.453-7.366v3.972l-3.454 1.986V9.63l3.454-1.986zm-8.312 3.972l3.453 1.986V9.63L7.638 7.644v3.972zm0 5.38l3.453 1.986V15.01l-3.453-1.986v3.972z"
      fill="white"
    />
  </Svg>
));
SvgBnt.displayName = "SvgBnt";
SvgBnt.defaultProps = {
  size: 24,
  color: "#000D2B"
};
export default SvgBnt;
