import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'boobs'

export default class boobs extends BotCommand {
    constructor() {
        super('4', {
            aliases: ['4'],
            description: `[NSFW CHANNELS ONLY] See /helpnsfw`,
            usage: `-${thing}`,
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const thing = 'boobjob'
        message.reply({ embeds: [await utils.hentai(thing)], ephemeral: true })
    }
}