// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    devServer: {
        proxy: {
            '/bill': {
                target: 'http://localhost:8001',
                ws: true,
                changeOrigin: true,
                pathRewrite:{'^/bill':''}
            },
        }
    }
}