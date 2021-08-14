/* eslint-disable @typescript-eslint/no-explicit-any */
import { BotCommand } from '@extensions/BotCommand';

export default class queue extends BotCommand {
    constructor() {
        super('queue', {
            aliases: ['queue'],
            description: 'Show the current queue',
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
			message.reply("You must be in a voice channel to use this command")
			return;
		}

		const queue = this.client.distube.getQueue(message)
		if (!queue) {
			message.reply('Nothing playing right now!')
		} else {
			message.channel.send(
				`Current queue:\n${queue.songs
					.map(
						
						(song: { name: any; formattedDuration: any }, id: unknown) =>
							`**${id ? id : 'Playing'}**. ${song.name} - \`${
								song.formattedDuration
							}\`\nRequested by: ${user}`,
					)
					.slice(0, 10)
					.join('\n')}`,
			)
		}
	}}