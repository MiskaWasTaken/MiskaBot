import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

export default class invite extends BotCommand {
    constructor() {
        super('invite', {
            aliases: ['invite'],
            description: 'Shows the link to invite me to your server!',
            usage: '-invite',
            cooldown: 10000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        const inviteLink = 'https://discord.ly/miska-bot'

        const inviteEmbed = new MessageEmbed()
            .setTitle('Invite Me')
            .setDescription(`${inviteLink}`)
            .setColor(message.member.roles.highest.color)

            message.reply({ embeds: [inviteEmbed] });
    }
}