'use strict';
const foregroundColor = '#72778C';
const backgroundColor = '#010032';
const selectionColor = 'rgba(58, 117, 196, 0.3)';
const black = '#000000';
const red = '#FF3333';
const green = '#017E7B';
const yellow = '#FBC069';
const blue = '#3A75C4';
const magenta = '#703FAF';
const cyan = '#34DBD7';
const white = '#EBEFF1';
const lightBlack = 'rgba(255, 255, 255, 0.2)';
const lightWhite = '#FFFFFF';
const darkBlue = '#010032';
const lightBlue = '#72778C';

const defaultConfig = {
  fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
  fontSize: 20,
  foregroundColor,
  backgroundColor,
  borderColor: overlap,
  cursorColor: blue,
  minimal: false,
  colors: {
    black: backgroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightWhite: foregroundColor,
    lightBlack,
    lightBlue,
    darkBlue
  }
};

// Check if Hyperise configuration exists in ~/.hyper.js. If not, fall back to default configuration.
const checkConfig = (config, setting) =>
  (config.hasOwnProperty('hyperise') && config.hyperise[setting]) || defaultConfig[setting];
const checkConfigColor = (config, colorName) =>
  (config.hasOwnProperty('hyperise') && config.hyperise.colors && config.hyperise.colors[colorName]) ||
  defaultConfig.colors[colorName];
// Setup vibrancy
exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    selectionColor,
    borderColor: darkBlue,
    cursorColor: foregroundColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: lightWhite,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
    css: `
      ${config.css}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        color: ${foregroundColor};
      }
      .header_windowHeaderWithBorder {
        border-color: ${backgroundColor} !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_tab.tab_active {
        background: ${backgroundColor};
        color: ${foregroundColor};
        transition: all 140ms ease;
      }
      .tab_tab:not(.tab_active) {
        background: ${darkBlue};
        color: ${lightBlack};
      }
      .tab_tab:not(.tab_active):hover {
        background: ${lightBlue};
        color: ${foregroundColor};
        transition: background 140ms ease;
      }
      .tab_icon {
        width: 15px;
        height: 15px;
      }
      .tab_shape {
        width: 7px;
        height: 7px;
      }
      .splitpane_divider {
        background-color: ${darkBlue} !important;
      }
      `
  });
};
