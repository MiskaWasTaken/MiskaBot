import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'pussy'

export default class pussy extends BotCommand {
    constructor() {
        super('14', {
            aliases: ['14'],
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