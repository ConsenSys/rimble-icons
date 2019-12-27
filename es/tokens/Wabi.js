function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgWabi = function SvgWabi(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M16.418 5.601c-.081.326-.067.743.023.78.09.038.316-.177.449-.421.127-.225.24-.292.398-.234.207.08.174.153-.252.52-.354.308-.425.418-.33.513.056.058.099.048.302-.062.255-.134.397-.125.397.029 0 .071-.094.129-.44.263-.245.096-.487.22-.543.282-.113.125-.312.518-.548 1.097-.204.502-.398.871-.525 1.015-.104.114-.454.187-1.191.244-.345.029-.388.024-.407-.058a7.26 7.26 0 01-.127-.675c0-.014.175-.01.392.006.388.028.775.133.955.258.137.096.151.081.213-.187.075-.306.236-.708.481-1.206.185-.37.19-.398.17-.747-.023-.388-.09-.555-.32-.81-.086-.09-.138-.19-.123-.229a.576.576 0 00.028-.09c0-.01.042-.02.09-.02.056 0 .155.086.245.215.25.355.326.287.326-.301 0-.268.02-.383.08-.45.095-.105.171-.11.251-.015.047.058.047.12.006.283zm-3.759 2.006c.033.354.1.478.312.555.085.033.203.082.26.1.137.058.175.263.322 1.604.155 1.455.188 1.662.335 2.111.223.684.203 1.48-.056 2.279-.133.412-.28.598-.582.761-.605.32-1.23.087-1.716-.642a2.364 2.364 0 01-.369-1.804c.072-.335.109-.842.075-.968-.013-.061-.165-.252-.335-.435-.53-.55-1.087-1.536-.978-1.713.033-.048.056-.197.056-.326 0-.263-.075-.369-.406-.555-.218-.124-.232-.249-.052-.594.099-.201.156-.244.652-.498.506-.258.733-.33 1.485-.464.312-.058.538-.053.708.02.2.086.256.195.29.57v-.001zM8.187 9.392c0 .244.08.484.137.422.024-.024.075-.158.123-.297.075-.24.213-.383.308-.321.08.052.051.33-.053.502-.142.235-.142.68.005.977.147.288.449.603.582.603.08-.005.175-.12.435-.564l.33-.56.052.335c.053.378.029.492-.184.861-.237.417-.501.742-.6.742-.113 0-.37-.253-.587-.579-.085-.135-.32-.393-.52-.58l-.363-.34-.222.039a2.61 2.61 0 01-.412.043c-.17.005-.189-.005-.202-.124-.016-.105.008-.139.107-.163.108-.019.218-.02.327-.005.132.02.231.01.283-.028.08-.058.076-.068-.004-.163-.048-.058-.19-.135-.322-.177-.33-.105-.544-.25-.544-.36 0-.143.18-.176.326-.057.488.402.625.46.753.33.09-.09.066-.263-.086-.564-.132-.269-.18-.518-.109-.589.048-.052.17-.038.255.029.1.08.185.345.185.588zm8.646 4.313a28.46 28.46 0 00-.756.881c-.88 1.063-.969 1.178-.932 1.216.038.038.785-.292.955-.421.213-.168.6-.579.671-.719.034-.057.08-.234.114-.387.057-.287.213-.507.354-.507.095 0 .138.11.1.253a2.866 2.866 0 01-.236.465c-.119.196-.199.373-.19.393.047.07.223.037.426-.082.118-.068.288-.244.416-.426.25-.354.42-.507.572-.507.127 0 .279.162.246.258-.015.038-.233.225-.478.412-.425.32-.558.488-.482.612.043.072.435-.024.851-.21.709-.32.903-.34 1.017-.125.094.178-.138.287-1.045.488-.25.058-.525.149-.61.201l-.156.096.109.091c.094.077.193.091.661.091.421 0 .578.02.648.072.09.072.085.077-.047.196-.085.072-.165.11-.213.091-.208-.086-.912-.215-1.168-.215-.458 0-.496.168-.08.33.189.077.26.163.222.264-.042.115-.156.095-.567-.096-.832-.388-.983-.408-1.98-.278-.473.063-.61.068-.662.019-.104-.086-.086-.167.061-.296.118-.1 1.03-1.8.988-1.838-.024-.024-.945.306-1.612.583-.085.034-.085.03 0-.105.312-.512 1.215-1.088 2.264-1.446.544-.187.577-.191.804-.187.151.01.194.03.203.105.015.12-.175.417-.468.728zM5.994 15.396c.175.249.577.67.638.67.062 0 .01-.416-.104-.852-.104-.398-.113-.589-.033-.67.061-.062.27-.077.355-.02.033.02.07.293.099.705.052.751.09.89.274 1.01.118.081.127.081.184.005.029-.044.061-.221.067-.398.013-.474.127-.685.33-.617.156.047.17.244.052.617-.137.435-.16.752-.099 1.177.09.58.308 1.097.416.987.024-.019.037-.666.043-1.431.004-1.197.014-1.437.085-1.662.132-.412.16-.43.68-.43.856 0 2.444.23 2.657.382.227.163.18.221-.27.364-.978.302-1.455.36-2.046.245-.194-.04-.37-.063-.388-.053-.019.01 0 .12.038.244.118.388.085.627-.194 1.479-.146.436-.284.944-.302 1.125-.019.182-.072.364-.1.402-.123.148-.26.082-.482-.23-.279-.382-.719-.803-.974-.938-.109-.058-.468-.163-.794-.24-.586-.133-.775-.225-.704-.339.024-.043.127-.048.355-.029.415.043.449-.014.17-.277a3.526 3.526 0 00-1.03-.637c-.356-.143-.417-.191-.417-.306 0-.092.132-.188.26-.188.042 0 .232.13.416.293.388.33.657.488.804.465.27-.04-.053-.666-.558-1.088-.185-.153-.364-.34-.402-.412-.062-.12-.062-.133.024-.195a.439.439 0 01.26-.058c.146.015.18.043.354.35.104.186.255.434.336.55zm6.779-8.22c.241-.037.292.158.292.154.128.33.053.742.053.742-.17-.033-.298-.244-.298-.244-.1-.235-.047-.651-.047-.651v-.001zM9.364 8.541s.364.201.502.416c0 0 .094.225.023.388 0 0-.378-.177-.567-.474 0 .005-.123-.153.043-.33z",
    fill: "white"
  }));
};

SvgWabi.displayName = "SvgWabi";
SvgWabi.defaultProps = {
  size: 24,
  color: "#399B32"
};
export default SvgWabi;