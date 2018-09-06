const express = require('express');
const moongose = require('mongoose');
const passportConfig = require('./services/passport');
const MoongooseRequire = require('./config/keys')
const app = express(MoongooseRequire.moongooseURI);
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000;

app.listen(PORT);