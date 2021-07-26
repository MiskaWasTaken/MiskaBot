import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

export default class owner extends BotCommand {
    constructor() {
        super('owner', {
            aliases: ['owner'],
            description: 'cool ig',
            usage: '$owner'
        })
    }
    async exec(message) {

        const ownerEmbed = new MessageEmbed()
            .setColor('#03dbfc')
            .setTitle('Credits')
            .setDescription('Mentally absused by Zordlan#3560, physically abused by Miska#6969')
            .setTimestamp()

        message.reply({ embeds: [ownerEmbed] });
    }
}