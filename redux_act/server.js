const path = require( "path");
const express  = require("express") ;
const webpack  = require("webpack") ;
const webpackDevMiddleware  = require ("webpack-dev-middleware") ;
const webpackHotMiddleware  = require("webpack-hot-middleware") ;
const config  = require("./webpack.config.js") ;

const app           = express(),
      DIST_DIR      = path.join(__dirname, "dist"),
      HTML_FILE     = path.join(DIST_DIR, "index.html"),
      isDevelopment = process.env.NODE_ENV !== "production",
      DEFAULT_PORT  = 3000,
      compiler      = webpack(config);

app.set("port", process.env.PORT || DEFAULT_PORT);

if (isDevelopment) {
	app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler));

	app.get("*", (req, res, next) => {
		compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});
}

else {
	app.use(express.static(DIST_DIR));

	app.get("*", (req, res) => res.sendFile(HTML_FILE));
}

app.listen(app.get("port"));