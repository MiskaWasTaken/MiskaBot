import { BotCommand } from '@extensions/BotCommand';

export default class resume extends BotCommand {
    constructor() {
        super('resume', {
            aliases: ['resume'],
            description: 'Resume a paused song',
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
			message.reply(`Nothing is currently playing. Executor: ${user}`)
			return;
		} 
		this.client.distube.resume(message)
		message.reply(`Music resumed by: ${user}`)


    }}