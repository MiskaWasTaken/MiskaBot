import 'module-alias/register'
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')

// require('dotenv').config()
// const { MongoClient } = require('mongodb')
// const uri = process.env['mongodb']

//starting the bot

import BotClient from "@extensions/BotClient"

const prefix = '$'

const client = new BotClient()

const voice = require('@discordjs/voice')

const DisTube = require("distube");
const distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 5,
	leaveOnEmpty: true,
	emptyCooldown: 5,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
});



client.on('messageCreate', (message) => {


	if (!message.content.startsWith(prefix) || message.author.bot) return;


	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'stop') {
		if(!message.member.voice.channel) return 
		distube.stop(message)
		message.reply('Music stopped.')
	}

	if (command == "volume"){
	if(!message.member.voice.channel) return 
	distube.setVolume(message, Number(args[0]));
	message.reply("changed volume")
	}

	if (command == "shuffle") {
	if(!message.member.voice.channel) return 
	distube.shuffle(message);
	message.reply("Shuffled queue.")

	}

	if (command === 'resume') {
		if(!message.member.voice.channel) return 
		distube.resume(message)
		message.reply('Music resumed.')

	}

	if (command === 'pause') {
	if(!message.member.voice.channel) return 
	distube.pause(message)
	message.reply('Music Paused.')

	}

	if (command === 'skip') {
	if(!message.member.voice.channel) return 
	distube.skip(message)
	message.reply('Song has been skipped.')

	}

	if (command === 'queue') {
		if(!message.member.voice.channel) return 
		const queue = distube.getQueue(message)
		if (!queue) {
			message.channel.send('Nothing playing right now!')
		} else {
			message.channel.send(
				`Current queue:\n${queue.songs
					.map(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(song: { name: any; formattedDuration: any }, id: unknown) =>
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
		if(!message.member.voice.channel) return 
		const filter = distube.setFilter(message, command)
		message.reply(
			`Current queue filter: ${filter.join(', ') || 'Off'}`,
		)
	}

	if (['repeat', 'loop'].includes(command)) {
		if(!message.member.voice.channel) return 
		const mode = distube.setRepeatMode(message)
		message.reply(`Set repeat mode to \`${mode ? mode === 2 ? 'All Queue' : 'This Song' : 'Off'}\``)
	}

	if (['disconnect', 'leave'].includes(command)) {
		if(!message.member.voice.channel) return 
		voice.channel.leave()
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
.on('finishSong', (queue) => queue.textChannel.send(`Song has finished playing.`))
.on('disconnect', (queue) => queue.textChannel.send('Disconnected.'))
.on('empty', (queue) => queue.textChannel.send('Voice channel is empty. Exiting...'))
.on("error", (err) => 
    console.error(err)
)





//console.log(process.env)
try { client.start() }
catch (error) { console.error(error) }

export default client