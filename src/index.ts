import 'module-alias/register'
const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// require('dotenv').config()
// const { MongoClient } = require('mongodb')
// const uri = process.env['mongodb']

//starting the bot
import BotClient from "@extensions/BotClient"

const client = new BotClient()


client.distube
.on("playSong", (queue, song) => queue.textChannel.send(
    `Playing: \n\`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
))
.on('searchNoResult', (queue) => queue.textChannel.send(`No results were found for your music.`))
.on('finish', (queue) => queue.textChannel.send('Queue has been finished.'))
.on('finishSong', (queue) => queue.textChannel.send(`Song has finished playing.`))
.on('disconnect', (queue) => queue.textChannel.send('Disconnected.'))
.on('addSong', (queue, song) =>
        queue.textChannel.send(
`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag}`,
        ))
.on('empty', (queue) => queue.textChannel.send('Voice channel is empty. Exiting...'))
.on("error", (err) => 
console.error(err)
)

//console.log(process.env)
try { client.start() }
catch (error) { console.error(error) }

export default client
