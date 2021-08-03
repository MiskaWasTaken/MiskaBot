import { MessageEmbed } from "discord.js";
import { BotCommand } from "@extensions/BotCommand";
const DisTube = require("distube");
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')


export default class avatar extends BotCommand {
	constructor() {
		super("play", {
			aliases: ["play"],
			description: "play moosic",
			usage: "$play <song link/query>",

		});
	}

	async exec(message, args) {

        const distube = new DisTube.default(this.client, {
            searchSongs: 1,
            searchCooldown: 5,
            leaveOnEmpty: true,
            emptyCooldown: 5,
            leaveOnFinish: false,
            leaveOnStop: false,
            plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
        });
        

        if(!message.member.voice.channel) return 

        if (message.member.voice.channel){

		distube.play(message, args.join(' '))

        const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

        distube.on("playSong", (queue, song) => queue.textChannel.send(
            `Playing: \n\`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
        ));
        
        } else {
            message.reply("Either something went wrong, or you are not in a voice channel. Please try again")
        }

        distube.on("error", (err) => 
    console.error(err)
)
        

	}}

