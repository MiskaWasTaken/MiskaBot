import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

const thing = 'vagina'

export default class vagina extends BotCommand {
    constructor() {
        super(thing, {
            aliases: [thing, 'pussy'],
            description: `[NSFW CHANNELS ONLY] ${thing} picture`,
            usage: `-${thing}`,

            slash: true,
            slashGuilds: utils.slashGuilds
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai(thing)] })
    }
}