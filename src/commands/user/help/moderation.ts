import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';




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


const helpmusicEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Moderation commands for Miska Bot')
	.addFields(
		{ name: `Ban`, value: "`$ban @user`", inline: true },
		{ name: 'Kick', value: "`$kick @user`", inline: true },
		{ name: 'Lock', value: "`$lock `", inline: true },
		{ name: 'Mute', value: "`$mute @user`", inline: true },
		{ name: 'Purge', value: "`$purge amount | unspecified amount will result in 50`", inline: true },
		{ name: 'Unban', value: "`$unban @user`", inline: true },
		{ name: 'Unlock', value: "`$unlock `", inline: true },
		{ name: 'Unmute', value: "`$unmute @user`", inline: true },
		{ name: 'Nuke', value: "`$nuke	(Purges an entire channel) Dont worry, this command can only be used by admins`", inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpmusicEmbed] });

}}