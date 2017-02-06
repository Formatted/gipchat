/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint new-cap: ["error", { newIsCapExceptions: ["cleverbot"] }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */

require('dotenv').config();
const express = require('express');
const path = require('path');
const cleverbot = require('cleverbot.io');
const urlencode = require('urlencode');

const bot = new cleverbot(process.env.YOUR_API_USER, process.env.YOUR_API_KEY);
bot.setNick(process.env.sessionname);

const app = express();
const server = require('http').createServer(app);
// const io = require('socket.io').listen(server);
const request = require('request');

const port = process.env.PORT || '8080';
// bot is on
bot.create((err, session) => {

});
//  here is how to talk to the bot
// bot.ask('Just a small town girl', (err, response) => {
//   console.log(response); // Will likely be: "Living in a lonely world"
// });

app.use(express.static(`${__dirname}/`));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, './src') });
});

app.post('/question/:qq', (req, res) => {
  bot.ask(req.params.qq, (err, response) => {
    request(`http://api.giphy.com/v1/gifs/search?q=${urlencode(response)}&api_key=dc6zaTOxFJmzC`, (error, response2, body) => {
      if (!error && response2.statusCode === 200) {
        const foo = JSON.parse(response2.body);
        if (foo.data[0] === undefined) {
          res.send(JSON.stringify({ reply: 'http://media2.giphy.com/media/iuHaJ0D7macZq/200.gif', replyHumanReadable: response }));
        }
        res.send(JSON.stringify({ reply: foo.data[0].images.fixed_height.url,
          replyHumanReadable: response }));
      } else {
        console.log(error, 'in error');
        res.send(JSON.stringify({ reply: 'http://media2.giphy.com/media/iuHaJ0D7macZq/200.gif', replyHumanReadable: response }));
      }
    });
    // res.send(JSON.stringify({ reply: response }));
  });
});

server.listen(port, () => {
  // custom console
  console.log(`Example app listening on port ${port}!`);
});
