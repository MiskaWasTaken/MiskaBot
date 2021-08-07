import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


export default class blowjob extends BotCommand {
    constructor() {
        super('blowjob', {
            aliases: ['blowjob'],
            description: '[NSFW CHANNELS ONLY] blowjob picture',
            usage: '-pussy',
            cooldown: 1000,
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('blowjob')] })

    }
}