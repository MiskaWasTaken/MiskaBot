import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

const thing = 'boobs'

export default class boobs extends BotCommand {
    constructor() {
        super(thing, {
            aliases: [thing],
            description: `[NSFW CHANNELS ONLY] ${thing} picture`,
            usage: `-${thing}`,
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const thing = 'boobjob'
        message.reply({ embeds: [await utils.hentai(thing)] })
    }
}