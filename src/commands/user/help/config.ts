import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';





export default class utility extends BotCommand {
    constructor() {
        super('config', {
            aliases: ['config'],
            description: 'Configuration for Miska Bot',
            usage: '$config',
			cooldown: 10000,
		slash: true,
		slashOptions: [

		]


        })
    }

    async exec(message) {


const helputilEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Configuration')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('This is the list of configurations and permissions required for each command.')
	.addFields(
		{ name: 'Chat Bot', value: "`Please create a channel specifically called chat-bot`", inline: true },
		{ name: 'Please make sure the bot has the permissions you accepted during auth', value: "`Some commands may break without it`", inline: true },
		{ name: 'Ban | Unban', value: "`BAN_MEMBERS`", inline: true },
		{ name: 'Kick', value: "`KICK_MEMBERS`", inline: true },
		{ name: 'Lock | Unlock', value: "`MANAGE CHANNELS`", inline: true },
		{ name: 'Nuke', value: "`ADMINISTRATOR`", inline: true },
		{ name: 'Purge', value: "`MANAGE_MESSAGES`", inline: true }

	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helputilEmbed] });

}}