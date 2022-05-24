const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    lang: 'zh-CN',
    title: "Mason's blog",
    description: '',
    theme:'vdoing',
    themeConfig,
    markdown:{
        lineNumbers: true,
    },
    head,
    plugins,
}