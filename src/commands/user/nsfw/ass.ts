import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

export default class ass extends BotCommand {
    constructor() {
        super('ass', {
            aliases: ['ass', 'butt'],
            description: '[NSFW CHANNELS ONLY] ass picture',
            usage: '-ass',

            slash: true,
            slashGuilds: utils.slashGuilds
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('ass')] })

    }
}