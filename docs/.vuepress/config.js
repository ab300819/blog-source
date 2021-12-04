const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    lang: 'zh-CN',
    title: "Mason's blog",
    description: '这是我的第一个 VuePress 站点',
    theme:'vdoing',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
    },
    markdown:{
        lineNumbers: true,
    },
    head,
    plugins,
    themeConfig,
}