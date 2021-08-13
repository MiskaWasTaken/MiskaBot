import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'hentai'

export default class hentai extends BotCommand {
    constructor() {
        super('13', {
            aliases: ['13'],
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

        message.reply({ embeds: [await utils.hentai(thing)], ephemeral: true })
    }
}