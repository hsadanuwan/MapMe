var express     = require("express"),
    hbs         = require('hbs'),
    path        = require('path'),
    rest        = require('restler'),
    http        = require('http'),
    querystring = require('querystring'),
    story       = require('./lib/story');
    qEngine     = require('./lib/qEngine');

//var mod_lib = require(__dirname+ '/lib/lib');

var app = express();
app.use(express.logger());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.__express);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css/', express.static(__dirname + '/public/css/'));
app.use('/js/', express.static(__dirname + '/public/js/'));
app.use('/images/', express.static(__dirname + '/public/images/'));

app.get('/', function(request, response) {
    response.render('index', {
        title: "MapMe 1.0"
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
