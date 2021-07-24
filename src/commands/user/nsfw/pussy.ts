import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';
import HMfull from 'hmfull'

export default class pussy extends BotCommand {
    constructor() {
        super('pussy', {
            aliases: ['pussy', 'vagina'],
            description: '[NSFW CHANNELS ONLY] vagina picture',
            usage: '-pussy',

            slash: true,
            slashGuilds: utils.slashGuilds
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

        let pussy = HMfull.HMtai.nsfw.vagina()

        const imageEmbed = new MessageEmbed()
            .setColor('#16a157')
            .setImage(pussy.url)
            .setTimestamp()
            .setFooter('Hentai NSFW')


        message.reply({ embeds: [imageEmbed] })
    }
}