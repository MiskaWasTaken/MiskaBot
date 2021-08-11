import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';





export default class fun extends BotCommand {
    constructor() {
        super('helpfun', {
            aliases: ['helpfun'],
            description: 'List of fun commands',
            usage: '$helpfun',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]


        })
    }

    async exec(message) {


const helpfEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the fun commands for Miska Bot')
	.addFields(
		{ name: `Covid`, value: "`/covid <country`", inline: true },
		{ name: 'Hug', value: "`/hug <user>`", inline: true },
		{ name: 'Meme', value: "`/meme <time>`", inline: true },
		{ name: '8ball', value: "`/8ball <user>`", inline: true },
		{ name: 'How Gay', value: "`/howgay <user>`", inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpfEmbed] });

}}