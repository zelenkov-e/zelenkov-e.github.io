
const  path = require( "path" );
const  express  = require( "express" );
const  webpack  = require( "webpack" );
const  webpackDevMiddleware  = require( "webpack-dev-middleware" );
const  webpackHotMiddleware  = require( "webpack-hot-middleware" );
const  config  = require( "./webpack.config.js" );

const app = express(),
      DIST_DIR = path.join(__dirname, "dist"),
      PORT     = 3000,
      compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res, next) => {
	const filename = path.join(DIST_DIR, "index.html");

	compiler.outputFileSystem.readFile(filename, (err, result) => {
	if (err) {
		return next(err);
	}
	res.set('content-type', 'text/html');
	res.send(result);
	res.end();
	});
});

app.listen(PORT);