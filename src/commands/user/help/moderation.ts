import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('no-buttons')




export default class moderation extends BotCommand {
    constructor() {
        super('helpmod', {
            aliases: ['helpmod'],
            description: 'Help for moderation commands',
            usage: '$helpmod',
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
	.setDescription('These are the Moderation commands for Miska Bot')
	.addFields(
		{ name: 'Update:', value: `1. Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
		{ name: 'Moderation commands:', value: `\n \n /ban <user> \n \n /kick <user> \n \n /lock \n \n /purge <number> \n \n /unban <userid> \n \n /unlock \n \n /nuke ==> Purges an entire channel. This command can only be used by admins \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`, inline: true }
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
