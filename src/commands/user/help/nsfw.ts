import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')

export default class nsfwhelp extends BotCommand {
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
				{ name: 'Update:', value: `Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
				{ name: 'Issues:', value: `Unfortunately discord does not allow some slash commands to be behind an age-gate. In the meantime, until Discord allows such a feature I will be associating NSFW commands to an ID. I will do this since some people may feel uncomfortable looking at explicit commands. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
				{ name: 'NSFW commands:', value: `\n \n Ahegao ==> /1 \n \n Ass ==> /2 \n \n Blowjob ==> /3 \n \n Boobs ==> /4 \n \n Creampie ==> /5 \n \n Cuckold ==> /6 \n \n Cum ==> /7 \n \n /Ero ==> /8 \n \n /Femdom ==> /9 \n \n /Foot ==> /10 \n \n /Gangbang ==> /11 \n \n /Gif ==> /gif \n \n Glasses ==> /12 \n \n Hentai ==> /13 \n \n Hololive ==> /hololive \n \n Pussy ==> /14 \n \n nsfw ==> /nsfw \n \n Fuck ==> /15 <user> \n \n<:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`, inline: true }
			)
			.setTimestamp()
			.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

			const pages = [helpnsfwEmbed] // REQUIRED

			// its still possible without embed
			// let pages = ['page1', 'page2', 'page3']
			
			simplydjs.embedPages(this.client, message, pages, {
			delEmoji: '🗑️', // default: 🗑️
		
			delcolor: 'DANGER', // default: DANGER
		// Colors that discord.js support (PRIMARY/SECONDARY/SUCCESS/DANGER)  
		skipBtn: false,
			})}}
		