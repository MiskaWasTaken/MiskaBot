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
		{ name: `Covid`, value: "`$covid USA`", inline: true },
		{ name: 'Hug', value: "`$hug @user`", inline: true },
		{ name: 'Meme', value: "`$meme`", inline: true },
		{ name: 'Rock Paper Scissors', value: "`$rps`", inline: true },
		{ name: 'Tic Tac Toe', value: "`$tictactoe`", inline: true },
		{ name: 'More coming soon', value: "Give me time please", inline: true}
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpfEmbed] });

}}