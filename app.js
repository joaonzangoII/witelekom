
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser'),
    path = require('path'),
    methodOverride = require('method-override'),
    cors = require('cors');
const nodemailer = require('nodemailer');
const defaultEmail = "witelekomwebsite@outlook.com";
var i18n = require('./i18n');

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: 'witelekomwebsite@outlook.com',
        pass: 'Witelekom123'
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname + '/views')));
app.use(express.static(path.resolve(__dirname + '/public')));
app.use('/views', express.static(path.resolve(__dirname, 'views/partials')));
app.use(i18n);

app.use(function (req, res, next) {
    res.locals.success = req.success;
    res.locals.error = req.error;
    res.locals.msg = req.msg;
    next();
});

// ROUTES
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/pt', (req, res) => {
    res.setLocale('pt')
    res.render('index')
})

app.get('/contacto', (req, res) => {
    res.setLocale('pt')
    res.render('contacto')
})

app.get('/en', (req, res) => {
    res.render('en/index')
})

app.get('/en/contacto', (req, res) => {
    res.render('en/contact')
})

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.set("view engine", "ejs");
// app.use(express.static(path.resolve(__dirname+ '/views')));
// app.use(express.static(path.resolve(__dirname+ '/public')));
// app.use('/views', express.static(path.resolve(__dirname, 'views/partials')));
// app.use(i18n);
// app.use(function (req, res, next) {
//     res.locals.success = req.success;
//     res.locals.error = req.error;
//     res.locals.msg = req.msg;
//     next();
// });

app.post('/contact/:lang', (req, res) => {
    console.log('Entrou no contacto')

    const body = `
    <style>@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,400italic,700italic&subset=latin,cyrillic);

    body {
        margin: 0;
        padding: 0;
        mso-line-height-rule: exactly;
        min-width: 100%;
    }
    
    .wrapper {
        display: table;
        table-layout: fixed;
        width: 100%;
        min-width: 620px;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    body, .wrapper {
        background-color: #ffffff;
    }
    
    /* Basic */
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    table.center {
        margin: 0 auto;
        width: 602px;
    }
    td {
        padding: 0;
        vertical-align: top;
    }
    
    .spacer,
    .border {
        font-size: 1px;
        line-height: 1px;
    }
    .spacer {
        width: 100%;
        line-height: 16px
    }
    .border {
        background-color: #e0e0e0;
        width: 1px;
    }
    
    .padded {
        padding: 0 24px;
    }
    img {
        border: 0;
        -ms-interpolation-mode: bicubic;
    }
    .image {
        font-size: 12px;
    }
    .image img {
        display: block;
    }
    strong, .strong {
        font-weight: 700;
    }
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li {
        margin-top: 0;
    }
    ol,
    ul,
    li {
        padding-left: 0;
    }
    
    a {
        text-decoration: none;
        color: #616161;
    }
    .btn {
        background-color:#2196F3;
        border:1px solid #2196F3;
        border-radius:2px;
        color:#ffffff;
        display:inline-block;
        font-family:Roboto, Helvetica, sans-serif;
        font-size:14px;
        font-weight:400;
        line-height:36px;
        text-align:center;
        text-decoration:none;
        text-transform:uppercase;
        width:200px;
        height: 36px;
        padding: 0 8px;
        margin: 0;
        outline: 0;
        outline-offset: 0;
        -webkit-text-size-adjust:none;
        mso-hide:all;
    }
    
    /* Top panel */
    .title {
        text-align: left;
    }
    
    .subject {
        text-align: right;
    }
    
    .title, .subject {
        width: 300px;
        padding: 8px 0;
        color: #616161;
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }
    
    /* Header */
    .logo {
        padding: 16px 0;
    }
    
    /* Logo */
    .logo-image {
    
    }
    
    /* Main */
    .main {
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    }
    
    /* Content */
    .columns {
        margin: 0 auto;
        width: 600px;
        background-color: #ffffff;
        font-size: 14px;
    }
    
    .column {
        text-align: left;
        background-color: #ffffff;
        font-size: 14px;
    }
    
    .column-top {
        font-size: 24px;
        line-height: 24px;
    }
    
    .content {
        width: 100%;
    }
    
    .column-bottom {
        font-size: 8px;
        line-height: 8px;
    }
    
    .content h1 {
        margin-top: 0;
        margin-bottom: 16px;
        color: #212121;
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
    
    .content p {
        margin-top: 0;
        margin-bottom: 16px;
        color: #212121;
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    .content .caption {
        color: #616161;
        font-size: 12px;
        line-height: 20px;
    }
    
    /* Footer */
    .signature, .subscription {
        vertical-align: bottom;
        width: 300px;
        padding-top: 8px;
        margin-bottom: 16px;
    }
    
    .signature {
        text-align: left;
    }
    .subscription {
        text-align: right;
    }
    
    .signature p, .subscription p {
        margin-top: 0;
        margin-bottom: 8px;
        color: #616161;
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }
    
    @media only screen and (min-width: 0) {
        .wrapper {
            text-rendering: optimizeLegibility;
        }
    }
    @media only screen and (max-width: 620px) {
        [class=wrapper] {
            min-width: 302px !important;
            width: 100% !important;
        }
        [class=wrapper] .block {
            display: block !important;
        }
        [class=wrapper] .hide {
            display: none !important;
        }
    
        [class=wrapper] .top-panel,
        [class=wrapper] .header,
        [class=wrapper] .main,
        [class=wrapper] .footer {
            width: 302px !important;
        }
    
        [class=wrapper] .title,
        [class=wrapper] .subject,
        [class=wrapper] .signature,
        [class=wrapper] .subscription {
            display: block;
            float: left;
            width: 300px !important;
            text-align: center !important;
        }
        [class=wrapper] .signature {
            padding-bottom: 0 !important;
        }
        [class=wrapper] .subscription {
            padding-top: 0 !important;
        }
    }</style>
    <center class="wrapper">
    <table class="top-panel center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="border" colspan="2">&nbsp;</td>
        </tr>
        </tbody>
    </table>

    <div class="spacer">&nbsp;</div>

    <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="column">
                <div class="column-top">&nbsp;</div>
                <table class="content" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <td class="padded">
                          <h1>Solicitação de Contacto </h1>
                 
                          
                          <p>Conteúdo do formulário:</p>
                          <table style="width:100%">
                          <tr>
                            <td><strong>Nome Completo</strong></td>
                            <td>${req.body.firstName} ${req.body.lastName}</td>
                          </tr>
                          <tr>
                            <td><strong>Nome do negócio<strong></td>
                            <td>${req.body.business}</td>
                          </tr>
                          <tr>
                            <td><strong>Email</strong></td>
                            <td>${req.body.email}</td>
                          </tr>
                              
                          <tr>
                            <td><strong>Cargo Tittle<strong></td>
                            <td>${req.body.job}</td>
                          </tr>
                          <tr>
                            <td><strong>Serviços</strong></td>
                            <td>${req.body.services}</td>
                          </tr>
                        </table><br>
                              
                              <br><br>
                          <p style="text-align:center;">${req.body.content} <br> Contacto: ${req.body.contact}</p>
                              
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="column-bottom">&nbsp;</div>
            </td>
        </tr>
        </tbody>
    </table>

    <div class="spacer">&nbsp;</div>

</center>
    `;

    const subject = `Solicitação de contacto - ${req.body.firstName} ${req.body.lastName} `;
    const mailOptions = {
        from: defaultEmail,
        to: 'info@witelekom.ao',
        subject: subject,
        html: body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        var path = req.params.lang === 'pt' ? "contacto" : "en/contact";
        if (error) {
            console.log('error at send email ' + error) + ' FOR ' + req.body.email;
            res.render(path, { error: true });
        } else {
            res.render(path, { success: true });
        }
    });
})

app.get('*', (req, res) => {
    res.render('index')
})

app.use((error, req, res, next) => {
    // render error page
    console.log(error)
    res.render('index');
})

app.listen(port, () => {
    console.log('WITELECOM SERVER ON ' + port);
})