// 引用 node 包的 path 工具
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, "dist") // 打包之后，再根目录下新建dist文件夹，打包后的文件放在这个目录下
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "sdfa",
            filename: "index.html", // 配置输出的文件名
            template: "./src/index.html" // 输入的文件
        })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(htm|html)/i,
                use: ["raw-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)/,
                use: ["file-loader"]
            }
        ]
    }
};
