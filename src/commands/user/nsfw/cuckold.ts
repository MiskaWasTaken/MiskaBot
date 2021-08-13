import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'cuckold'

export default class cuckold extends BotCommand {
    constructor() {
        super('6', {
            aliases: ['6'],
            description: `[NSFW CHANNELS ONLY] See /helpnsfw`,
            usage: `-${thing}`,
            cooldown: 2000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {
        if (!message.channel.nsfw){
            message.reply({ embeds: [this.client.notNsfwEmbed] }).then(ms => {
                setTimeout(() => ms.delete(), 5000)
                
                return;
        })}

        message.reply({ embeds: [await utils.hentai(thing)]})
    }
}