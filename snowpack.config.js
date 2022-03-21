/** @type {import("snowpack").SnowpackUserConfig } */
const IS_DEV = process.env.NODE_ENV === 'development'
module.exports = {
    mount: {
        src: { url: '/dist' },
        public: { url: '/', static: true }
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
    ],
    alias: {
        "@": './src'
    },
    routes: [
        /*Enable an SPA Failback in  development :*/
        { "match": "routes", "src": ".*", "dest": "/index.html" }
    ],
    env: {
        IS_DEV
    },
    packageOptions: {
        /*。。。*/
    },
    devOptions: {
        port: 8080
    },
    buildOptions: {
        jsxInject: "import React from 'react' ",
        metaUrlPath: "sources"
    }
}