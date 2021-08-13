import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';

export default class ass extends BotCommand {
    constructor() {
        super('2', {
            aliases: ['2'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '-ass',
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('ass')], ephemeral: true })

    }
}