import 'module-alias/register'
import { MessageEmbed } from "discord.js";
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')

// require('dotenv').config()
// const { MongoClient } = require('mongodb')
// const uri = process.env['mongodb']

//starting the bot

import BotClient from "@extensions/BotClient"

const prefix = '$'

const client = new BotClient()

const DisTube = require("distube");
const distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 5,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
})


client.on('messageCreate', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'stop') {
		distube.stop(message)
		message.channel.send('Music stopped.')
	}

	if (command === 'resume') {
		distube.resume(message)
		message.reply('Music resumed.')

	}

	if (command === 'pause') {
	distube.pause(message)
	message.reply('Music Paused.')

	}

	if (command === 'skip') {
	distube.skip(message)
	message.reply('Song has been skipped.')

	}

	if (command === 'play') {
		distube.play(message, args.join(' '))

	}

	if (command === 'queue') {
		const queue = distube.getQueue(message)
		if (!queue) {
			message.channel.send('Nothing playing right now!')
		} else {
			message.channel.send(
				`Current queue:\n${queue.songs
					.map(
						(song, id) =>
							`**${id ? id : 'Playing'}**. ${song.name} - \`${
								song.formattedDuration
							}\``,
					)
					.slice(0, 10)
					.join('\n')}`,
			)
		}
	}

})



const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube.on("playSong", (queue, song) => queue.textChannel.send(
    `Playing: \n\`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
));




//console.log(process.env)
try { client.start() }
catch (error) { console.error(error) }

export default client