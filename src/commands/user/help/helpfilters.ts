import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')





export default class utility extends BotCommand {
    constructor() {
        super('helpfilters', {
            aliases: ['helpfilters'],
            description: 'Music filters',
            usage: '$filters',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]

        })
    }

    async exec(message) {

const embed2 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Music Filters')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the music filters available in Miska Bot.')
	.addFields(
		{ name: 'Update:', value: `1. Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
		{ name: 'Filters:', value: `\n \n /filter 3d ==> For Surrond Sound/3D music \n \n /filter bassboost ==> Bassboost filter \n \n /filter nightcore ==> Nightcore filter \n \n /filter vaporwave ==> Vaporwave filter \n \n /filter echo ==> Echo filter \n \n /filter karaoke ==> Karaoke filter \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`, inline: true })
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

	const pages = [embed2] // REQUIRED

	// its still possible without embed
	// let pages = ['page1', 'page2', 'page3']
	
	simplydjs.embedPages(this.client, message, pages, {
	delEmoji: '🗑️', // default: 🗑️

	delcolor: 'DANGER', // default: DANGER


  
 skipBtn: false,
	})}}
