import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')




export default class utility extends BotCommand {
    constructor() {
        super('helputility', {
            aliases: ['helputility'],
            description: 'Utility Help',
            usage: '$helputility',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]
           
        })
    }

    async exec(message) {


const helputilEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the utility commands available in Miska Bot, Please choose one.')
	.addFields(
		{ name: 'Update:', value: `Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
		{ name: 'Utility commands:', value: `\n \n Avatar==> /avatar <user> \n \n Bot Information ==> /botinfo \n \n Calculator ==> /calc \n \n Google ==> /google <query> \n \n Invite ==> /invite (invite this bot) \n \n Owner/Credits ==> /owner \n \n Latency/Ping ==> /ping \n \n Server Count ==> /servercount \n \n Server Info ==> /serverinfo \n \n User Information ==> /userinfo <user> \n \n /translate ==> Allows you to translate to any language supported by Google. \n \n /servericon ==> Display the server's icon \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`, inline: true }
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

	const pages = [helputilEmbed] // REQUIRED

	// its still possible without embed
	// let pages = ['page1', 'page2', 'page3']
	
	simplydjs.embedPages(this.client, message, pages, {
	delEmoji: '🗑️', // default: 🗑️

	delcolor: 'DANGER', // default: DANGER
// Colors that discord.js support (PRIMARY/SECONDARY/SUCCESS/DANGER)  
skipBtn: false,
})}}