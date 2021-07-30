import 'module-alias/register'

// require('dotenv').config()
// const { MongoClient } = require('mongodb')
// const uri = process.env['mongodb']

//starting the bot

import BotClient from "@extensions/BotClient"

const prefix = '$'

const client = new BotClient()

const DisTube = require("distube").default;
const distube = new DisTube(client);


client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'ee') {
		message.channel.send('Pong!')
	}
	if (command === 'play') {
		distube.play(message, args.join(' '))
	}
})




//console.log(process.env)
try { client.start() }
catch (error) { console.error(error) }

export default client