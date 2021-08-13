import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'gangbang'

export default class gangbang extends BotCommand {
    constructor() {
        super('11', {
            aliases: ['11'],
            description: `[NSFW CHANNELS ONLY]See /helpnsfw`,
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