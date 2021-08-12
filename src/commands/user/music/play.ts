import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

export default class play extends BotCommand {
    constructor() {
        super('play', {
            aliases: ['play'],
            description: 'Play a song',
            usage: '$play <song>',
            cooldown: 2000,
            args: [
                {
                    id: 'song',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'song',
                    description: "Your song query",
                    type:'STRING',
                    required: true
                }

            ]

        })
    }
    async exec(message, args) {
		if(!message.member.voice.channel){ 
			message.reply("You must be in a voice channel to use this command.")
			return;
		}

		this.client.distube.play(message, args.song)

        this.client.distube
        .on("playSong", (message, song) => {
            const playingEmbed = new MessageEmbed()
            .setColor("#FFFF00")
            .setTitle(`🎵 Now Playing 🎵`)
            .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
            .setFooter(`Requested by ${song.user.tag}`)
            message.reply({ embeds: [playingEmbed] })
        })

    }
}