import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
import commandManager from '@functions/commandManager';
import utils from '@functions/utils';




export default class image extends BotCommand {
    constructor() {
        super('helpimage', {
            aliases: ['helpimage'],
            description: 'Help for Image manipulation',
            usage: '$helpimage',
        })
    }

    async exec(message) {
;

const helpimgEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Image Manipulation commands for Miska Bot')
	.addFields(
		{ name: `Blur`, value: "`$blur @user`", inline: true },
		{ name: 'Delete', value: "`$delete @user`", inline: true },
		{ name: 'Grey', value: "`$grey @user`", inline: true },
		{ name: 'Pride', value: "`$pride @user`", inline: true },
		{ name: 'More coming soon', value: "Give me time please"}
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpimgEmbed] });

}}