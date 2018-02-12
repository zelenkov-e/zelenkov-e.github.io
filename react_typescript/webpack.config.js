// module.exports = {
//     entry: "./src/index.tsx",
//     output: {
//         filename: "bundle.js",
//         path: __dirname + "/dist"
//     },

//     // Включить карты кода для отладки вывода webpack.
//     devtool: "source-map",

//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: [".ts", ".tsx", ".js", ".json"]
//     },

//     module: {
//         rules: [
//             // Все файлы с разрешениями
//             { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

//             // Все карты кода для выходных
//             { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
//         ]
//     },

    
//     // избежать добавления в итоговый файл всех файлов React
//     externals: {
//         "react": "React",
//         "react-dom": "ReactDOM"
//     },
// };