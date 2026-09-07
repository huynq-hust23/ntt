const express = require('express');
const ejs = require('ejs');
const dogRouter = require('./dog');
const app = express();
const PORT = process.env.PORT || 30010;

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', (req, res) => {
	res.render('index.html');
});

app.use(express.static(__dirname));

app.get('/health', (req, res) => res.send('OK'));

app.use('/dog', dogRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
