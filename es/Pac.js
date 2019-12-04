var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

var Svg = styled('svg')({ flex: 'none' }, space, color);

var PacIcon = function PacIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: 'undefined',
      width: size,
      height: size,
      fill: 'currentcolor'
    }),
    React.createElement('path', { d: 'M 16 0 A 16 16 0 0 0 16 32 A 16 16 0 0 0 16 0 M9.009 19.198v-6.155c0-.889.228-1.73.57-2.543a7.079 7.079 0 011.853-2.58 7.504 7.504 0 012.693-1.542 7.28 7.28 0 012.506-.374c.492.018.984.12 1.47.211a7.21 7.21 0 011.97.687 7.28 7.28 0 011.837 1.307 7.752 7.752 0 011.725 2.621c.075.185.153.37.22.557.08.216.014.31-.213.31-.847.001-1.694.018-2.54-.009-.409-.013-.824-.095-1.181-.313-.168-.102-.301-.265-.435-.413a3.807 3.807 0 00-1.48-1.022 3.771 3.771 0 00-2.08-.187c-.855.16-1.575.543-2.151 1.18-.498.55-.839 1.18-.926 1.922-.033.273-.06.55-.061.825-.003 2.839-.011 5.678.009 8.517.007 1.107-.405 2.018-1.195 2.774a3.587 3.587 0 01-1.666.9c-.246.06-.499.1-.75.129-.053.006-.138-.069-.168-.127-.03-.056-.01-.138-.01-.21v-6.465zm4.506-3.502c.431.51.901.904 1.474 1.168.643.295 1.324.434 2.024.343 1.11-.144 2.028-.644 2.706-1.541.201-.267.498-.402.818-.452a6.98 6.98 0 01.994-.076c.748-.01 1.496-.004 2.244-.002.246 0 .259.014.187.234a9.045 9.045 0 01-1.571 2.891c-.75.929-1.643 1.684-2.764 2.135-.503.202-1.04.368-1.575.435-.704.088-1.424.098-2.134.07-.471-.017-.939-.15-1.405-.246-.262-.054-.517-.134-.775-.204-.144-.038-.24-.103-.24-.278.005-1.445.003-2.89.003-4.335 0-.032.006-.063.014-.142z' })
  );
};

PacIcon.displayName = 'PacIcon';

PacIcon.defaultProps = {
  size: 24
};

export default PacIcon;