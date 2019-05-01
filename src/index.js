const app = require('./app.js');

app.listen(app.get('port'),() => {
    console.log('The magic is hapening on port', app.get('port'));
});