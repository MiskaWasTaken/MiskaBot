import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from "discord.js"


export default class servercount extends BotCommand {
    constructor() {
        super('servercount', {
            aliases: ['servercount'],
            description: 'Server Counter',
            usage: '$servercount'
        })
    }
    async exec(message) {

        const sicon = message.guild.iconURL;

        const serverEmbed = new MessageEmbed()
        .setTitle("Server Count")
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setColor("#ff0000")
        .setThumbnail(sicon)
        .addFields(
            { name: `Sever Name:`, value: `${message.guild.name}`, inline: true },
            { name: 'Created On', value: `${message.guild.createdAt}` },
            { name: 'You Joined At:', value: `${message.member.joinedAt}`, inline: true },
            { name: 'Total Members:', value: `${message.guild.memberCount}` },
            { name: 'Bot Version:', value: "RW0.1" }
        )
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');


        message.reply({ embeds: [serverEmbed] })
    }
}