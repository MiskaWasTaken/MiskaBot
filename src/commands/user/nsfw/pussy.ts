import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'vagina'

export default class vagina extends BotCommand {
    constructor() {
        super(thing, {
            aliases: [thing, 'pussy'],
            description: `[NSFW CHANNELS ONLY]`,
            usage: `-${thing}`,
            cooldown: 1000,
            slash: true,
            slashOptions: [
    
            ] 
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai(thing)] })
    }
}