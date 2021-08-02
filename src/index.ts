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
});

client.on('messageCreate', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'stop') {
		distube.stop(message)
		message.reply('Music stopped.')
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

	
	if (
		[
			`3d`,
			`bassboost`,
			`echo`,
			`karaoke`,
			`nightcore`,
			`vaporwave`,
		].includes(command)
	) {
		const filter = distube.setFilter(message, command)
		message.reply(
			`Current queue filter: ${filter.join(', ') || 'Off'}`,
		)
	}

	if (['repeat', 'loop'].includes(command)) {
		const mode = distube.setRepeatMode(message)
		message.reply(`Set repeat mode to \`${mode ? mode === 2 ? 'All Queue' : 'This Song' : 'Off'}\``)
	}

	if (['disconnect', 'leave'].includes(command)) {
		distube.disconnect(message)
	}

})


const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube.on("playSong", (queue, song) => queue.textChannel.send(
    `Playing: \n\`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
));

distube.on('addSong', (queue, song) =>
queue.textChannel.send(
	`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag}`,
))

distube
.on('searchNoResult', message => message.channel.send(`No results were found for you music.`))
.on('finish', (queue) => queue.textChannel.send('Queue has been finished.'))
.on('finishSong', (queue, song) => queue.textChannel.send(`Song has finished playing.`))
.on('disconnect', (queue, song) => queue.textChannel.send('Disconnected.'))
.on('empty', (queue, song) => queue.textChannel.send('Voice channel is empty.'))

distube.on("error", (channel, error) => channel.send(
    "An error was encountered: " + error
));


//console.log(process.env)
try { client.start() }
catch (error) { console.error(error) }

export default client