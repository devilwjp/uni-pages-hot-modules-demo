const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                // 在客户端包中将hotRequire替换成require
                'hotRequire':'require',
                // 在客户端包中将hotRequireContext替换成require.context（必须替换，不能只替换hotRequire）
                'hotRequire.context': 'require.context'
            })
        ]
    }
}
