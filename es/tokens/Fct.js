var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFct = function SvgFct(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      height: props.size,
      width: props.size
    }),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M5.764 7.975c-.024.166-.018.282.071.37-.114.198-.202.346-.287.511.085-.165.173-.31.287-.48.254.318 1.048.318 2.13-.031.127-.032.127.254.127.254 0 .159-.033.38-1.399.572-.382.063-.922.032-1.176-.255a.673.673 0 01-.095-.381c0-.031 0-.063.031-.127l.004-.006a.591.591 0 01.06-.153c.031-.095.095-.159.159-.254-.032.064-.095.19-.159.254a.691.691 0 01.159-.254l.088-.02zm.191-.409c.046-.069.098-.137.166-.206l-.096.127a.802.802 0 00-.016.017c.034-.047.07-.095.112-.144l-.096.127a.982.982 0 00-.07.079zm0 0c-.04.059-.077.116-.12.175a.314.314 0 00-.012.013 5.396 5.396 0 00-.077.125l.209-.313zm.676-.761c.095-.08.19-.169.285-.24a1.065 1.065 0 00-.192.382c-.031.095-.031.19.032.254a3.507 3.507 0 00-.017.017c.21.234.897.165 1.765-.208.286-.127.572-.255.827-.412.095-.032.222.127.254.157.031.032.063.128 0 .192-.318.19-.668.38-1.05.508-1.091.468-1.97.538-2.211.24l-.013.014c-.031-.095-.063-.159-.031-.285 0-.033 0-.064.031-.097.03-.037.06-.072.094-.105a1.62 1.62 0 00-.125.138c0-.033.031-.096.031-.128.064-.127.128-.222.223-.35l.066-.051c.096-.135.238-.251.379-.393.255-.222.255-.222.381-.317a.623.623 0 01.056-.048 6.39 6.39 0 01.28-.2l.014-.007.049-.035c.456-.299.94-.553 1.444-.759a2.71 2.71 0 01.248-.123l-.134.056c-.079.035-.159.068-.24.098-.127.032-.127.032-.382.16-.128.063-.128.063-.35.19-.095.064-.095.064-.318.19-.09.061-.18.124-.268.188 2.08-1.024 1.935-.98 1.788-.921-.18.055-.36.12-.534.194-.737.315-1.43.762-1.863 1.176a1.804 1.804 0 00-.171.158 3.91 3.91 0 01.127-.115 2.513 2.513 0 00-.191.21c-.1.1-.2.18-.284.272zm-1.806 7.372l.024.078c.024.083.067.16.128.221-.06-.172-.115-.346-.167-.52a.804.804 0 00.167.52 3.308 3.308 0 01-.159-.603c.572.795 2.733.604 5.498-.572 3.527-1.493 6.737-4.035 7.182-5.687.095-.413.032-.699-.191-.922.159.16.318.35.477.509.19.223.222.508.128.89-.446 1.683-3.719 4.257-7.342 5.782-3.146 1.37-5.518 1.43-5.745.305-.055-.185-.11-.425-.166-.591.032.095.064.19.128.287l.018.066c-.002.04 0 .08.005.12a1.036 1.036 0 01-.002-.11l-.003-.01.02.237zm5.16-9.405l.045-.018c.953-.254 1.557-.127 1.43.413-.032.191-.159.381-.35.572-.159.064-.508 0-.572-.064.16-.19.255-.35.286-.476.099-.42-.358-.532-1.104-.338l-.033.012.299-.1zm-.057.023l.133-.04-.075.016-.058.024zm-5.269 8.261v.023c-.09-.09-.124-.208-.127-.354a.965.965 0 01-.006-.192c.004.06.006.121.006.182a.882.882 0 01-.006-.188c-.009-.167-.026-.357-.026-.497 0 .191.064.318.128.445 0 .096.007.199.014.302-.014-.103-.014-.206-.014-.302 2.128 2.256 11.694-3.59 11.79-6.068.031-.445-.223-.604-.35-.7l.254.16.318.221c.255.223.35.54.255.954-.414 1.588-3.528 4.035-6.929 5.465-2.692 1.162-4.772 1.314-5.307.549zm-.016-2.424l.048-.19c-.064.255-.032.476.095.603a.267.267 0 00-.002.008.756.756 0 00.256.183c.095.127.032.444.032.444-.032.096-.064.223-.127.192-.318-.16-.445-.413-.413-.795-.03.19.015.384.127.54l.003-.018a.737.737 0 01-.098-.49l.013-.082a.349.349 0 00-.013.082l.063-.445.064-.255v-.063l-.048.286zm.467-.78c-.06.127-.105.261-.133.399-.096-.127-.128-.286-.096-.477 0-.063 0-.095.032-.158a3.96 3.96 0 01.222-.54.698.698 0 00.064.571l-.02.047c.398.522 1.85.39 3.706-.396 2.384-1.049 4.577-2.765 4.863-3.845.096-.412-.032-.667-.381-.795.063-.031.063-.031.254.032.127.033.223.064.285.064.414.16.573.445.446.89-.318 1.207-2.702 3.082-5.308 4.194-2.065.858-3.655 1.017-4.067.413l.133-.399zm4.903 9.157c-.381.013-.698-.026-.937-.116-.19-.095-.445-.19-.603-.285.387.16.896.2 1.481.142 3.349-.33 9.221-3.849 9.546-6.148l-.032.095a3.86 3.86 0 00-.063.573c0 .031 0 .063-.032.095-.382 1.366-3.082 3.495-6.038 4.766-1.331.567-2.483.85-3.32.878h-.002zm.372-1.306l.058-.08c-.02.026-.037.052-.056.08.482-.136 1.001-.31 1.55-.526.349-.095.476.128.476.128.032.031.032.159-.159.254-.798.312-1.533.536-2.178.671l-.015.028.01-.027c-1.127.236-1.98.202-2.425-.1-.159-.128-.381-.285-.54-.413.512.438 1.695.428 3.28-.015zm-3.978-.684c-.128-.159-.286-.318-.381-.477.127.159.317.381.444.54a.068.068 0 00-.063-.063zM11.46 4.532c.19 0 .445-.032.635-.032.668 0 .986.254.858.763-.159.604-1.017 1.462-2.129 2.224-.222.095-.445-.191-.381-.318 0-.032.032-.032.032-.032.985-.667 1.716-1.398 1.875-1.938.127-.508-.286-.73-1.018-.667h.128zm3.813.73c.382.191.54.51.413.986-.38 1.429-3.178 3.622-6.229 4.925-.572.253-1.143.444-1.652.603-.286.032-.318-.35-.19-.54.031-.063.063-.063.095-.096.476-.127.985-.317 1.526-.54 2.89-1.239 5.528-3.335 5.879-4.67.127-.477-.064-.795-.477-.953.19.095.444.19.635.285zm3.305 3.146l.096.16c.095.254.095.254.095.38v.032c-.095-.032-.285-.413-.317-.572 0-.19-.033-.318-.128-.444l.255.444zm.668 1.684c.031.159.031.35-.032.572-.381 1.398-2.765 3.463-5.657 4.957-.317.127-.508-.096-.445-.318a.326.326 0 01.16-.19c2.923-1.526 5.37-3.623 5.752-5.053.063-.255.063-.476 0-.667.095.254.19.508.222.699zm.223 1.335v.254c0 .127 0 .222-.033.381-.222.858-1.271 1.97-2.7 3.05-.223.16-.35-.063-.319-.222a.58.58 0 01.16-.255c1.493-1.111 2.573-2.255 2.796-3.145.032-.159.063-.317.032-.476l.063.412v.001zM6.31 7.709c-.031-.096-.063-.16-.031-.286-.032.127 0 .19.031.285zm-.795 1.207a.683.683 0 01-.094-.382c0 .16 0 .255.095.382zm-.54 1.334c-.095-.127-.127-.286-.095-.477-.032.191 0 .35.096.477zm11.982 1.113a.434.434 0 01-.064.412c-1.398 1.271-3.464 2.543-5.625 3.463-3.21 1.335-5.625 1.43-5.847.286-.032-.095 0-.031.031-.063 0 .032 0 .19.128.381-.033-.064-.064-.095-.096-.159-.032-.031-.032-.063-.063-.095-.064-.095-.095-.222-.16-.317.605.794 2.829.635 5.69-.604 2.16-.922 4.226-2.224 5.624-3.463.255-.128.35.063.381.159zm-8.04 5.814c.031.063.063.19-.064.222-1.144.19-1.97.095-2.352-.318-.127-.159-.317-.38-.445-.54.35.445 1.207.572 2.447.381.223 0 .381.191.413.255zm10.01-2.32a5.77 5.77 0 00.255-.667c-.383 1.239-2.83 3.146-5.498 4.29-1.654.698-3.02.953-3.75.73.19.063.476.128.698.16 2.035.317 7.183-2.225 8.296-4.513h-.001zm-1.652 2.288c0 .032-.064.128-.191.223-.7.571-1.653 1.144-2.638 1.556-.826.35-1.557.54-2.097.572h-.795c.636.032 1.557-.19 2.67-.635 1.112-.477 2.193-1.112 2.987-1.78.032 0 .032-.031.064-.031 0 0 0 .031.031.031 0 0 0 .032-.031.064zM4.88 9.647c0-.031.032-.095.032-.127.064-.19.19-.476.255-.668 0 .096-.033.16-.064.255-.096.16-.16.35-.223.54z",
      fill: "white"
    })
  );
};

SvgFct.displayName = "SvgFct";
SvgFct.defaultProps = {
  size: 24,
  color: "#417BA4"
};
export default SvgFct;