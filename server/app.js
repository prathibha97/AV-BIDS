const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const api = require('./routes/api');
const credentials = require('./middlewares/credentials');
const corsOptions = require('./config/corsOptions');
const updateUserSubscriptionPlan = require('./utils/updateUserSubscriptionPlan');
const updateEventsStatus = require('./utils/updateEventStatus');

require('./services/cache');

const app = express();

app.use(credentials);
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json({ limit: '25mb' }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api', api);


cron.schedule('0 0 * * *', () => {
  updateUserSubscriptionPlan();
  updateEventsStatus();
});

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
