import { BotCommand } from '@extensions/BotCommand';

export default class volume extends BotCommand {
    constructor() {
        super('volume', {
            aliases: ['volume'],
            description: 'Change the volume of a song',
            usage: '$play <song>',
            cooldown: 2000,
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

        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

		if(!message.member.voice.channel){ 
			message.reply("You must be in a voice channel to use this command.")
			return;
		}

        const queue = this.client.distube.getQueue(message)
		if (!queue) {
			message.reply(`Nothing playing right now! Executor: ${user}`)
			return;
		} 

		if(!message.member.permissions.has(['MANAGE_CHANNELS'])){
			message.reply("You must have MANAGE_CHANNELS permission to use this command!")
            return;
		}

        const volume = parseInt(args.volume)
        if (isNaN(volume)) {
		message.channel.send(`Please enter a valid number. Executed by: ${user}`)
		return;
		}
        this.client.distube.setVolume(message, volume)
		message.channel.send(`Volume set to \`${volume}\`\nSet by: ${user}`)
    }
}