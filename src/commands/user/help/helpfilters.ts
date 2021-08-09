import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';





export default class utility extends BotCommand {
    constructor() {
        super('filters', {
            aliases: ['filters'],
            description: 'Music filters',
            usage: '$filters',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]

        })
    }

    async exec(message) {


const helputilEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Music Filters')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the music filters available in Miska Bot.')
	.addFields(
		{ name: 'These filters will only work in a voice channel', value: "`Please join a voice channel before using these filters`", inline: true },
		{ name: '3D | Surrond Sound', value: "`$3d`", inline: true },
		{ name: 'Bass Boost', value: "`$bassboost`", inline: true },
		{ name: 'Nightcore', value: "`$nightcore`", inline: true },
		{ name: 'Vapor Wave', value: "`$vaporwave`", inline: true },
		{ name: 'Echo', value: "`$echo`", inline: true },
		{ name: 'Karaoke', value: "`$karaoke`", inline: true }

	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helputilEmbed] });

}}