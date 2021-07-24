import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

export default class blowjob extends BotCommand {
    constructor() {
        super('blowjob', {
            aliases: ['blowjob'],
            description: '[NSFW CHANNELS ONLY] blowjob picture',
            usage: '-pussy',
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('blowjob')] })

    }
}