exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontFamily: 'SF Mono',
    fontSize: '20',
    foregroundColor: '#ffffff',
    backgroundColor: '#000000',
    yellow: '#FBC069',
    red: '#FF3333',
    cyan: '#34DBD7',
    borderColor: '#34DBD7',
    cursorColor: '#34DBD7',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #34DBD7;
      }
      .tabs_nav .tabs_title {
        color: #34DBD7;
      }
    `
  });
};
