import { BotCommand } from '@extensions/BotCommand';

export default class pause extends BotCommand {
    constructor() {
        super('loop', {
            aliases: ['loop'],
            description: 'Loop the queue or song',
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


		if(!message.member.voice.channel){
			message.reply("You must be in a voice channel to use this command.")
			return;
		}
		

		const queue = this.client.distube.getQueue(message)
		if (!queue) {
			message.reply(`Nothing playing right now! Executor: ${user}`)
			return;
		} 
		const mode = this.client.distube.setRepeatMode(message)
		message.reply(`Set repeat mode to \`${mode ? mode === 2 ? 'All Queue' : 'This Song' : 'Off'}\`\nRequested by: ${user}`)
	}

}