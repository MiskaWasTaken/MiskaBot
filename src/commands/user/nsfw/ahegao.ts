import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

export default class ahegao extends BotCommand {
    constructor() {
        super('ahegao', {
            aliases: ['ahegao'],
            description: '[NSFW CHANNELS ONLY] ahegao',
            usage: '-ahegao',
        })
    }
    async exec(message) {
        const nsfwEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Please use this command in nsfw marked channels only!')
            .setDescription('Listen you dummy, please use this command in nsfw channels only!')
            .setImage('https://i.imgur.com/oe4iK5i.gif')
            .setTimestamp()
            .setFooter('Channel Flag Error')

        if (!message.channel.nsfw) { return message.reply({ embeds: [nsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('ahegao')] })

    }
}