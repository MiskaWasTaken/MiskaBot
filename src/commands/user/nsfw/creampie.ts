import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


export default class creampie extends BotCommand {
    constructor() {
        super('5', {
            aliases: ['5'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '-creampie',
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('creampie')], ephemeral: true })
    }
}