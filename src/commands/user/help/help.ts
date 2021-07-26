import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
	




export default class help extends BotCommand {
    constructor() {
        super('help', {
            aliases: ['help'],
            description: 'You know what this is',
            usage: '$help',
        })
    }

    async exec(message) {


const helpEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('There are the different category available in Miska Bot, Please choose one.')
	.addFields(
		{ name: `📷Image Manipulation`, value: "`$helpimage`", inline: true },
		{ name: '🎈Fun', value: "`$helpfun`", inline: true },
		{ name: '🤖Moderation', value: "`$helpmod`", inline: true },
		{ name: '🎧Music', value: "`$helpmusic`", inline: true },
		{ name: '🔞NSFW', value: "`$helpnsfw`", inline: true },
		{ name: '👩‍💻Config', value: "`$config`", inline: true },
		{ name: '😉SFW', value: "`$helpsfw`", inline: true },
		{ name: '🐱‍💻Utility', value: "`$helputility`", inline: true },
		{ name: '🆘Help Me', value: "`$helpme`", inline: true }
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpEmbed] });

}}