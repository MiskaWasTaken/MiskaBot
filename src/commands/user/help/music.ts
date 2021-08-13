import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')




export default class music extends BotCommand {
    constructor() {
        super('helpmusic', {
            aliases: ['helpmusic'],
            description: 'Help for music commands',
            usage: '$helpmusic',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]
		
        })
    }

    async exec(message) {


const embed2 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Music commands for Miska Bot')
	.addFields(
		{ name: 'Update:', value: `1. Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
		{ name: 'Music commands:', value: `\n \n /play <song> \n \n /queue \n \n /skip \n \n /stop \n \n /pause \n \n /resume \n \n /filter <filter> ==> Use /helpfilters to see avalible filters \n \n /shuffle \n \n /loop \n \n<:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`, inline: true }
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

	const pages = [embed2] // REQUIRED

	// its still possible without embed
	// let pages = ['page1', 'page2', 'page3']
	
	simplydjs.embedPages(this.client, message, pages, {
	firstEmoji: '', // default: ⏪
	backEmoji: '', // default: ◀️
	delEmoji: '🗑️', // default: 🗑️
	forwardEmoji: '', // default: ▶️
	lastEmoji: '', // default: ⏩
	
	btncolor: 'SUCCESS', // default: SUCCESS
	delcolor: 'DANGER', // default: DANGER
	skipcolor: 'PRIMARY', // default: PRIMARY
	// Colors that discord.js support (PRIMARY/SECONDARY/SUCCESS/DANGER)
  
 skipBtn: false,
	})}}