import { BotCommand } from '@extensions/BotCommand';

export default class stop extends BotCommand {
    constructor() {
        super('stop', {
            aliases: ['stop'],
            description: 'Stop a currently playing song',
            usage: '$play <song>',
            cooldown: 5000,
            args: [

            ],
            slash:true,
            slashOptions: [


            ]

        })
    }
    async exec(message, args) {

        
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

		if(!message.member.voice.channel) {
			message.reply("You must be in a voice channel to use this command.")
			return;
		}

		const queue = this.client.distube.getQueue(message)
		if (!queue) {
			message.reply(`Nothing playing is playing currently. Executor: ${user}`)
			return;
		} 
		this.client.distube.stop(message).catch(err => console.log(err))
		message.reply(`Music stopped by: ${user}`)
	}


}