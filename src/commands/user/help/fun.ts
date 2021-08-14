import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('no-buttons')

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
		{ name: 'Update:', value: "`Please keep in mind the / represents a slash command. This is not a prefix.`", inline: true },
		{ name: `Covid`, value: "`/covid <country>`", inline: true },
		{ name: 'Hug', value: "`/hug <user>`", inline: true },
		{ name: 'Meme', value: "`/meme <time>`", inline: true },
		{ name: '8ball', value: "`/8ball <user>`", inline: true },
		{ name: 'How Gay', value: "`/howgay <user>`", inline: true },
		{ name: 'Tic Tac Toe', value: "`$tictactoe @user`", inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

	const pages = [helpfEmbed] 
	
	simplydjs.embedPages(this.client, message, pages, {
		delEmoji: '🗑️', 
		delcolor: 'DANGER',
        skipBtn: false,
	})}}
