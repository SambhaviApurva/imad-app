var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one' : {
    title: 'Article one | Sambhavi Apurva',
    heading: 'Article one',
    date: '4th august , 2017',
    content: 
         `<p>
                    this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.
                </p>
                <p>
                    this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.
                </p>
                <p>
                    this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.this are the contents of 1st article... and it is going to be displayed in my web app.
                </p>`
 },
  'article-two' : {
     title: 'Article two | Sambhavi Apurva',
    heading: 'Article two',
    date: '14th august , 2017',
    content: 
        `<p>
            this are the contents of 2nd article... and it is going to be displayed in my web app.
        </p>`
},
  'article-three' : {
     title: 'Article three | Sambhavi Apurva',
    heading: 'Article three',
    date: '24th august , 2017',
    content: 
         `<p>
            this are the contents of 3rd article... and it is going to be displayed in my web app.
        </p>`
}
};
function createtemplate(data) { 
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
        
        var htmltemplate= `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <h3> 
                       ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                   ${content}
                    </div>
                </div>    
            </body>
        </html>
        `;
    return htmltemplate;
    }
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req , res){
    //articleName == article-one
    //Articles[articleName] == {} content object for article-one
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
