import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';




export default class moderation extends BotCommand {
    constructor() {
        super('helpmod', {
            aliases: ['helpmod'],
            description: 'Help for moderation commands',
            usage: '$helpmod',
        })
    }

    async exec(message) {


const helpmusicEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Moderation commands for Miska Bot')
	.addFields(
		{ name: `Ban`, value: "`$ban @user`", inline: true },
		{ name: 'Kick', value: "`$kick @user`", inline: true },
		{ name: 'Lock', value: "`$lock #channel`", inline: true },
		{ name: 'Mute', value: "`$mute @user`", inline: true },
        { name: `Nick`, value: "`$nick @user`", inline: true },
		{ name: 'Purge', value: "`$purge amount`", inline: true },
		{ name: 'Unban', value: "`$unban @user`", inline: true },
		{ name: 'Unlock', value: "`$unlock #channel`", inline: true },
		{ name: 'Unmute', value: "`$unmute @user`", inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpmusicEmbed] });

}}