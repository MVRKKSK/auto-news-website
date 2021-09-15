const express = require("express");
const request = require("request");
const app = express();
const https = require("https");
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use("/css", express.static(__dirname + 'public/css'))
app.use("/images", express.static(__dirname + 'public/images'))
app.get("/", function(req, res) {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f2b5edf8cdc346d683645e8c28655fd8"
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            const articles = data.articles;
            res.render("news", { pages: articles })

        }
    })
})
app.post("/", function(req, res) {
    const sportsurl = "https://newsapi.org/v2/everything?q=cricket&from=2021-08-14&sortBy=publishedAt&apiKey=f2b5edf8cdc346d683645e8c28655fd8"
    request(sportsurl, function(error, response, newsdata) {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(newsdata);
            const artcls = data.artcls;
            res.render("sports", { pgs: articles })

        }
    })
})

app.listen( /* process.env.PORT || */ 3000, function() {
    console.log("server is runnig at port 3000")
})