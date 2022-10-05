var i18n = require('i18n');

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'pt'],
    // where to store json files - defaults to './locales' relative to modules directory
    directory: __dirname + '/locales',
    defaultLocale: 'pt',
    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    cookie: 'lang',
});

module.exports = function (req, res, next) {
    i18n.init(req, res);
    res.locals.__ =  res.__;
    console.log(req.originalUrl)
    var current_locale = i18n.getLocale();
    i18n.setLocale(res, 'pt')
    // console.log({ current_locale  })
    return next();
};