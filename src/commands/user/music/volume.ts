import { BotCommand } from '@extensions/BotCommand';

export default class play extends BotCommand {
    constructor() {
        super('volume', {
            aliases: ['volume'],
            description: 'Change the volume of a song',
            usage: '$play <song>',
            cooldown: 5000,
            args: [
                {
                    id: 'volume',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'volume',
                    description: "Your volume",
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

        const queue = this.client.distube.getQueue(message)
		if (!queue) {
			message.reply('Nothing playing right now!')
			return;
		} 

		if(!message.member.permissions.has(['MANAGE_CHANNELS', 'ADMINISTRATOR'])){
			message.reply("You must have MANAGE_CHANNELS permission to use this command!")
            return;
		}

        const volume = parseInt(args.volume)
        if (isNaN(volume)) {
		message.channel.send(`Please enter a valid number.`)
		return;
		}
        this.client.distube.setVolume(message, volume)
		message.channel.send(`Volume set to \`${volume}\``)
    }
}