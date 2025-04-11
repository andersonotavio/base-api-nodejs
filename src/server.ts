import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/api/ping', (req, res) => {
  res.json({pong: true})
});

server.listen(4444, () =>{
  console.log("otavioblog backend running na porta 4444 link:  http://localhost:4444")
})