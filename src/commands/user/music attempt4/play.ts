import { BotCommand } from '@extensions/BotCommand';

export default class play extends BotCommand {
    constructor() {
        super('play', {
            aliases: ['play'],
            description: 'music',
            usage: '$play <song>',
            cooldown: 5000,
            args: [
                {
                    id: 'song',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
		if(!message.member.voice.channel){ 
			message.reply("You must be in a voice channel to use this command.")
			return;
		}

		console.log(this.client.distube)
		this.client.distube.play(message, args.song)
    }
}