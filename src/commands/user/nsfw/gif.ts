import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


const thing = 'gif'

export default class gif extends BotCommand {
    constructor() {
        super(thing, {
            aliases: [thing],
            description: `[NSFW CHANNELS ONLY]`,
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