import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


export default class blowjob extends BotCommand {
    constructor() {
        super('3', {
            aliases: ['3'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '-pussy',
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('blowjob')], ephemeral: true })

    }
}