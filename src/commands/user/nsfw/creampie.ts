import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


export default class creampie extends BotCommand {
    constructor() {
        super('creampie', {
            aliases: ['creampie'],
            description: '[NSFW CHANNELS ONLY]',
            usage: '-creampie',
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('creampie')] })
    }
}