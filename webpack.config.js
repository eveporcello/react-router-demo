module.exports = {
    entry: "./index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.min.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
