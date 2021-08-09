import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

export default class nsfw extends BotCommand {
	constructor() {
		super('helpnsfw', {
			aliases: ['helpnsfw'],
			description: 'Help for NSFW commands',
			usage: '$helpnsfw',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]
		
		})
	}

	async exec(message) {

		const nsfwEmbed = new MessageEmbed()
			.setColor('#ff0000')
			.setTitle('Please use this command in nsfw marked channels only!')
			.setDescription('Listen you dummy, please use this command in nsfw channels only!')
			.setImage('https://i.imgur.com/oe4iK5i.gif')
			.setTimestamp()
			.setFooter('Channel Flag Error')

		if (!message.channel.nsfw) { return message.reply({ embeds: [nsfwEmbed] }) }


		const helpnsfwEmbed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Help Command')
			.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
			.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
			.setDescription('These are the NSFW commands for Miska Bot')
			.addFields(
				{ name: `Ahegao`, value: "`$ahegao`", inline: true },
				{ name: 'Ass', value: "`$ass`", inline: true },
				{ name: 'Blowjob', value: "`$blowjob`", inline: true },
				{ name: 'Boobs', value: "`$boobs`", inline: true },
				{ name: `Creampie`, value: "`$creampie`", inline: true },
				{ name: 'Cuckold', value: "`$cuckold`", inline: true },
				{ name: 'Cum', value: "`$cum`", inline: true },
				{ name: 'Ero', value: "`$ero`", inline: true },
				{ name: `Femdom`, value: "`$femdom`", inline: true },
				{ name: 'Foot', value: "`$foot`", inline: true },
				{ name: 'Gangbang', value: "`$gangbang`", inline: true },
				{ name: 'Gif', value: "`$gif`", inline: true },
				{ name: `Glasses`, value: "`$glasses`", inline: true },
				{ name: 'Hentai', value: "`$hentai`", inline: true },
				{ name: 'Hololive', value: "`$hololive`", inline: true },
				{ name: 'Pussy', value: "`$pussy`", inline: true },
				{ name: 'Fuck', value: "`$fuck @user`" },
			)
			.setTimestamp()
			.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

		message.reply({ embeds: [helpnsfwEmbed] });

	}
}