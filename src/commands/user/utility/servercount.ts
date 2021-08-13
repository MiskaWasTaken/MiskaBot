import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from "discord.js"


export default class servercount extends BotCommand {
    constructor() {
        super('servercount', {
            aliases: ['servercount'],
            description: 'Server member count',
            usage: '$servercount',
            cooldown: 10000,
            slash: true,
            slashOptions: [
    
            ]
            
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
            { name: 'Bot Version:', value: "RW2.0" }
        )
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');


        message.reply({ embeds: [serverEmbed] })
    }
}