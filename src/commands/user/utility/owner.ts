import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

export default class owner extends BotCommand {
    constructor() {
        super('owner', {
            aliases: ['owner'],
            description: 'Cool people gang',
            usage: '$owner',
            cooldown: 10000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {

        const ownerEmbed = new MessageEmbed()
            .setColor('#03dbfc')
            .setTitle('Credits')
            .setDescription('Mentally abused by Zordlan#3560, physically abused by Miska#6969')
            .setTimestamp()

        message.reply({ embeds: [ownerEmbed] });
    }
}