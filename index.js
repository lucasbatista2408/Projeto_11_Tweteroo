import express from "express"
import cors from "cors"

const server = express();

server.use(cors());
server.use(express.json())

const users = []

const tweetsData = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	}
]

//LOGIN
server.post('/sign-up', (request, response) => {
  const user = request.body;
  users.push(user)
  response.send('ok')
})

//TWEET POST
server.post('/tweets', (request, response) => {
  const tweet = request.body;
  tweetsData.push(tweet)
  response.send('ok')
})


// GET DE TWEETS
server.get('/tweets', (request, response) => {
  response.send(tweetsData)
} )


server.listen(5000)

