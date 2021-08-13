import { BotCommand } from '@extensions/BotCommand';

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

		this.client.distube.play(message, args.song).catch(err => console.log(err))


    }
}

