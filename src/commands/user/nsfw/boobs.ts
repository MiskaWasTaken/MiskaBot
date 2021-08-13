import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'boobs'

export default class boobs extends BotCommand {
    constructor() {
        super('4', {
            aliases: ['4'],
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

        const thing = 'boobjob'
        message.reply({ embeds: [await utils.hentai(thing)]})
    }
}