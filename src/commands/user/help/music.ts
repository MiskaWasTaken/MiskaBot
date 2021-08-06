import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';





export default class music extends BotCommand {
    constructor() {
        super('helpmusic', {
            aliases: ['helpmusic'],
            description: 'Help for music commands',
            usage: '$helpmusic',
			cooldown: 5000,

		
        })
    }

    async exec(message) {


const helpmusicEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Music commands for Miska Bot')
	.addFields(
		{ name: `Play`, value: "`$play`", inline: true },
		{ name: 'Queue', value: "`$queue`", inline: true },
		{ name: 'Skip', value: "`$skip`", inline: true },
		{ name: 'Stop', value: "`$stop`", inline: true },
		{ name: 'Pause', value: "`$pause`", inline: true },
		{ name: 'Resume', value: "`$resume`", inline: true },
		{ name: 'Filters', value: "`$filters`", inline: true },
		{ name: 'Shuffle', value: "`$shuffle`", inline: true },
		{ name: 'Pause', value: "`$pause`", inline: true },
		{ name: 'Loop', value: "`$loop`", inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpmusicEmbed] });

}}