const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



 module.exports = {
       entry:'./src/index.tsx',
       plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
           title: 'Production'
         }),
       
       ],
    //    output: {
    //      filename: '[name].bundle.js',
    //      path: path.resolve(__dirname, 'dist')
    //    },

        output: {
            filename: "bundle.js",
            path: __dirname + "/dist"
        },

          // Включить карты кода для отладки вывода webpack.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // Все файлы с разрешениями
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // Все карты кода для выходных
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    
    // избежать добавления в итоговый файл всех файлов React
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

     };
