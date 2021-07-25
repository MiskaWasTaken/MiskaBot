import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
import commandManager from '@functions/commandManager';
import utils from '@functions/utils';




export default class utility extends BotCommand {
    constructor() {
        super('helputility', {
            aliases: ['helputility'],
            description: 'Utility Help',
            usage: '$helputility',
        })
    }

    async exec(message) {
;

const helputilEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the utility commands available in Miska Bot, Please choose one.')
	.addFields(
		{ name: `Afk`, value: "`$afk im away`", inline: true },
		{ name: 'Avatar', value: "`$avatar @user`", inline: true },
		{ name: 'Bot info', value: "`$botinfo @user`", inline: true },
		{ name: 'Calculator', value: "`$calculator 2+2`", inline: true },
		{ name: 'Giveaway', value: "`$giveaway 1h/m/s 1 item`", inline: true },
		{ name: 'Google', value: "`$google item`", inline: true },
		{ name: 'Invite', value: "`$invite (invite this bot)`", inline: true },
		{ name: 'Invites', value: "`$invites (see invites of a user)`", inline: true },
		{ name: 'Owner', value: "`$owner`", inline: true },
        { name: 'Ping', value: "`$ping`", inline: true },
        { name: 'Say', value: "`$say. $say #channel. $say message`", inline: true },
        { name: 'Set Prefix', value: "`$setprefix prefix`", inline: true },
        { name: 'server Count', value: "`$servercount`", inline: true },
        { name: 'Server Info', value: "`$serverinfo`", inline: true },
        { name: 'Translate', value: "`$translate iso_code message`", inline: true },
        { name: 'User Info', value: "`$user @user`", inline: true },
        { name: 'Youtube Stats', value: "`$ytstats channel_name`", inline: true},
        { name: 'Tickets (see $config)', value: "`$ticket`", inline: true},
        { name: 'Ticket Close', value: "`$close (run inside of a ticket)`" }

	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helputilEmbed] });

}}