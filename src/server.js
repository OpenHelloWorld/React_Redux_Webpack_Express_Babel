import express from 'express'
import bodyParser from 'body-parser'

var app = express();

app.set('port', (process.env.PORT || 3001));

//CORS middleware
var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
  }
});
