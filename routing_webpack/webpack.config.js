var path = require('path');
 
module.exports = {
   entry: "./app/app.jsx", // входная точка - исходный файл
//    output:{
    //    path: path.resolve(__dirname, './public/src'),     // путь к каталогу выходных файлов - папка public
    //    path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
    //    publicPath: '/public',
    //    filename: "bundle.js"       // название создаваемого файла
//    },
  output: { path: __dirname, filename: 'bundle.js'},
   devServer: {
     historyApiFallback: true,
   },
   module:{
       rules:[   //загрузчик для jsx
           {
               test: /\.jsx$/, // определяем тип файлов
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["env", "react"]    // используемые плагины
               }
           }
       ]
   }
}