import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';


export default class sfw extends BotCommand {
	constructor() {
		super('helpsfw', {
			aliases: ['helpsfw'],
			description: 'Help for SFW command',
			usage: '$helpsfw',

		
		})
	}

	async exec(message) {
		const helpsfwEmbed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Help Command')
			.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
			.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
			.setDescription('These are the SFW commands for Miska Bot')
			.addFields(
				{ name: 'Poki', value: "`$poki`", inline: true },
			)
			.setTimestamp()
			.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg')

		message.reply({ embeds: [helpsfwEmbed] })
	}
}